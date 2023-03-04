import { useSelector } from 'react-redux';
import './Reservations.scss';

const Reservations = () => {
  const reservations = useSelector((state) => state.users.reservations);
  const tutors = useSelector((state) => state.tutors.tutors);
  console.log(reservations);
  console.log(tutors);
  return (
    <table>
      <tr>
        <th>Tutor Name</th>
        <th>City</th>
        <th>Date</th>
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
        </tr>
      ))}
    </table>
  );
};
export default Reservations;
