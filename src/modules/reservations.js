import { useSelector } from 'react-redux';

const Reservations = () => {
  const { reservations } = useSelector((state) => state.users);
  return (
    reservations.map((item) => (
      <div key={item.id}>
        {`${item.date}  ${item.hour} ${item.city}`}
        {' '}
      </div>
    ))
  );
};

export default Reservations;
