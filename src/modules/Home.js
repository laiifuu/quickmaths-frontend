import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const Home = () => {
  const { tutors } = useSelector((state) => state.tutors);
  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));

  if (tutors.length === 0) {
    return (
      <div>
        <div> There are no tutors currently available</div>
        {isLoggedIn && <Link to="/add_tutor"> Add a tutor now!</Link>}
      </div>
    );
  }

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

export default Home;
