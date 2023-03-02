import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const Home = () => {
  const { tutors } = useSelector((state) => state.tutors);

  return (
    <section className="main-page-section">
      <Link className="login-button" to="/login">Sign in</Link>
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

export default Home;
