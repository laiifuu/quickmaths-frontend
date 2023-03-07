import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const Reservations = () => {
  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => {
        navigate('/user/login');
      }, 2000);
    }
  }, [isLoggedIn, navigate]);

  const sortReservations = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    let hoursA = Number(a.hour.replace(/(^\d+)(.+$)/i, '$1'));
    let hoursB = Number(b.hour.replace(/(^\d+)(.+$)/i, '$1'));

    if (a.hour.includes('pm')) {
      hoursA += 12;
    }

    if (b.hour.includes('pm')) {
      hoursB += 12;
    }

    dateA.setHours(hoursA);
    dateB.setHours(hoursB);

    return dateA - dateB;
  };

  let reservations = useSelector((state) => state.users.reservations);
  const tutors = useSelector((state) => state.tutors.tutors);

  if (isLoggedIn) {
    reservations = reservations.sort(sortReservations);
    return (
      <section className="reservations-page">
        <h1>My reservations</h1>
        {reservations.length !== 0 ? (
          <>
        <p className="next-session-info">
          Your next lesson is on
          {' '}
          {((new Date(reservations[0].date)).toUTCString()).substring(0, 16)}
          {' '}
          at
          {' '}
          {reservations[0].hour}
          {' '}
          in
          {' '}
          {reservations[0].city}
          {' '}
          with
          {' '}
          {tutors.find((tutor) => tutor.id === reservations[0].tutor_id).firstName}
        </p>
        <table>
          <thead>
            <tr>
              <th>Tutor Name</th>
              <th>City</th>
              <th>Date</th>
              <th>Hour</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((item) => (
              <tr key={item.id}>
                <td>
                  {tutors.find((tutor) => tutor.id === item.tutor_id).firstName}
                  {' '}
                  {tutors.find((tutor) => tutor.id === item.tutor_id).lastName}
                </td>
                <td>{item.city}</td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
        ) : (
          <div className="no-items-available">
            <div>There are no reservations currently</div>
            <button><Link to="/reserve"> Make a reservation now!</Link></button>
          </div>
        )}
      </section>
    );
  }
  return (
    <section className="flexContainer">
      <div>Please log in to access this page</div>
    </section>
  );
};

export default Reservations;
