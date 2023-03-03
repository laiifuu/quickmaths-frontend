import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VscSearch } from 'react-icons/vsc';
import { fetchReservation } from '../redux/reservations/reservations';

const Reserve = ({ chosenTutorId }) => {
  const { tutors } = useSelector((state) => state.tutors);

  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.users);
  // console.log(user);
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [tutorId, setTutorId] = useState(-1 || chosenTutorId);
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const userId = 1;

  const hours = [
    '8am - 9am',
    '9am - 10am',
    '10am - 11am',
    '1am - 12am',
    '1pm - 2pm',
    '2pm - 3pm',
    '3pm - 4pm',
    '4pm - 5pm',
    '5pm - 6pm',
    '6pm - 7pm',
    '7pm - 8pm',
  ];

  const cities = [
    'Tokyo',
    'Paris',
    'Algiers',
    'London',
    'Milan',
    'Toronto',
    'California',
    'Cairo',
    'New York',
    'Moscow',
    'Madrid',
    'Dubai',
  ];

  const handleSubmit = (e) => {
    if (hour === '' || city === '' || date === '' || tutorId === -1) {
      setErrorMessage('All fields are required');
      e.preventDefault();
      return;
    }
    dispatch(fetchReservation({
      city, hour, date, tutor_id: tutorId, user_id: userId,
    }));
  };

  const getCurrentDate = () => new Date().toJSON().slice(0, 10);

  return (
    <section className="reserve-tutor-page">
      <button type="button" className="search-btn">
        <VscSearch />
      </button>

      <h1>BOOK A SESSION WITH A TUTOR</h1>

      <div className="reserve-page-divider" />
      <p>
        Our app has highly experienced math teachers who specialize in various
        subjects, each with years of experience teaching students of all levels,
        using proven teaching methods and resources to ensure that you grasp
        concepts and apply them practically.
      </p>

      <form onSubmit={handleSubmit} className="reserve-form">
        <select name="tutor_id" id="tutor-drop-down" onChange={(e) => setTutorId(e.target.value)}>
          <option value="">Select a tutor</option>
          {tutors.map((tutor) => (
            <option
              key={tutor.id + tutor.firstName}
              value={tutor.id}
            >
              {`${tutor.firstName} ${tutor.lastName}`}
            </option>
          ))}
        </select>

        <select name="city" id="city-dropdown" onChange={(e) => setCity(e.target.value)}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <input type="date" id="date-picker" name="date" min={getCurrentDate()} onChange={(e) => setDate(e.target.value)} />

        <select name="hour" id="hour-dropdown" onChange={(e) => setHour(e.target.value)}>
          <option value="">Select an hour</option>
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>

        <p className="error-messages">{errorMessage}</p>
        <input type="submit" value="Book Now" />
      </form>
    </section>
  );
};

Reserve.propTypes = {
  chosenTutorId: PropTypes.number.isRequired,
};

export default Reserve;
