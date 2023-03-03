import { useSelector } from 'react-redux';

const Reservations = () => {
  const { reservations } = useSelector((state) => state.reservations);
  return (
    reservations.map((item) => (
      <div key={item.id}>
        {`${item.date}  ${item.hour}`}
        {' '}
      </div>
    ))
  );
};

export default Reservations;
