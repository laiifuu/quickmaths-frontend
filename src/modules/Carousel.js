import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import Tutor from './Tutor';

const Carousel = ({ tutors }) => {
  const handlePrevClick = () => {
    const carousel = document.querySelector('.carousel');
    const item = document.querySelector('.tutor-card');
    carousel.scrollLeft -= item.clientWidth;
  };
  const handleNextClick = () => {
    const carousel = document.querySelector('.carousel');
    const item = document.querySelector('.tutor-card');
    carousel.scrollLeft += item.clientWidth;
  };

  return (
    <div className="carousel-container">
      <button
        type="button"
        className="previous"
        onClick={() => {
          handlePrevClick();
        }}
      >
        <IconContext.Provider value={{ size: '1.15rem', color: 'white' }}>
          <div>
            <BiLeftArrow />
          </div>
        </IconContext.Provider>
      </button>
      <ul className="carousel">
        {tutors.map((item) => (
          <li key={item.id}>
            <Tutor obj={item} />
          </li>
        ))}
      </ul>
      <button
        className="next"
        type="button"
        onClick={() => {
          handleNextClick();
        }}
      >
        <IconContext.Provider value={{ size: '1.15rem', color: 'white' }}>
          <div>
            <BiRightArrow />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  );
};

Carousel.propTypes = {
  tutors: PropTypes.arrayOf({
    obj: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fbLink: PropTypes.string.isRequired,
      igLink: PropTypes.string.isRequired,
      twitterLink: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      hourlyFee: PropTypes.number.isRequired,
      experience: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Carousel;
