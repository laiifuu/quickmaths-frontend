import { useSelector } from 'react-redux';
import './Reservations.scss';

const Reservations = () => {
  // eslint-disable-next-line max-len
  const reservations = useSelector((state) => state.users.reservations).sort((a, b) => { if (a.date > b.date && a.hour.match(/\d+/) > b.hour.match(/\d+/)) return 1; return -1; });
  const tutors = useSelector((state) => state.tutors.tutors);
  console.log(reservations);
  console.log(tutors);
  return (
    <>
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
