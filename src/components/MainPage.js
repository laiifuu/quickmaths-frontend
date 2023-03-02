import { useSelector } from 'react-redux';
import Carousel from './Carousel';

const MainPage = () => {
  const { tutors } = useSelector((state) => state.tutors);

  return (
    <section className="main-page-section">
      <div className="heading">
        <h1>AWESOME TUTORS</h1>
        <p>Please choose your favourite tutor!</p>
      </div>
      <div className="divider">
        {[...Array(20)].map(() => (
          <div key={Math.random(100)} className="divider-bullet" />
        ))}
      </div>

      <Carousel tutors={tutors} />
    </section>
  );
};

export default MainPage;
