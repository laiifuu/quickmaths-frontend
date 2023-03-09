import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const Home = () => {
  const { tutors } = useSelector((state) => state.tutors);
  const isLoggedIn = useSelector((state) => state.users.logged_in);

  return (
    <section className="main-page-section">
      <div className="heading">
        <h1>AWESOME TUTORS</h1>
        {tutors.length !== 0 ? <p>Please choose your favourite tutor!</p> : ''}
      </div>

      <div className="divider">
        {[...Array(20)].map(() => (
          <div key={Math.random(100)} className="divider-bullet" />
        ))}
      </div>

      {tutors.length !== 0 ? (
        <Carousel tutors={tutors} />
      ) : (
        <div className="no-items-available">
          <div> There are no tutors currently available</div>
          {isLoggedIn && (
            <Link to="/add_tutor">
              {' '}
              <button type="button">Add a tutor now!</button>
            </Link>
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
