import { useSelector } from 'react-redux';
import './Reservations.scss';

const Reservations = () => {
  const reservations = useSelector((state) => state.users.reservations).sort((a, b) => {
    if (a.date > b.date) return 1; return -1;
  });
  const tutors = useSelector((state) => state.tutors.tutors);
  console.log(reservations);
  console.log(tutors);
  return (
    <>
      <h2 className="reservationPageTitle">My reservations</h2>
      <div className="reservationPageMessage">
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
      </div>
      <table>
        <tr>
          <th>Tutor Name</th>
          <th>City</th>
          <th>Date</th>
          <th>Hour</th>
        </tr>
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
      </table>
    </>
  );
};
export default Reservations;
