import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { fetchTutors } from '../redux/tutors/tutors';
import Tutor from './Tutor';
// import Tutor from './Tutor';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTutors());
  }, [dispatch]);

  const { tutors } = useSelector((state) => state.tutors);

  const moveNext = () => {
    const track = document.querySelector('.carousel-track');
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      const index = Number(nextSlide.getAttribute('data-index'));
      if (index < tutors.length - 2) {
        track.style.transform = `translateX(-${300 * index}px)`;
        currentSlide.classList.remove('current-slide');
        nextSlide.classList.add('current-slide');
      }
    }
  };

  const movePrevious = () => {
    const track = document.querySelector('.carousel-track');
    const currentSlide = document.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    if (previousSlide) {
      const index = Number(previousSlide.getAttribute('data-index'));
      track.style.transform = `translateX(-${300 * index}px)`;
      currentSlide.classList.remove('current-slide');
      previousSlide.classList.add('current-slide');
    }
  };

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
      <div className="carousel">
        <button
          type="button"
          className="previous pointer-btn"
          onClick={() => {
            movePrevious();
          }}
          style={{ zIndex: 55555 }}
        >
          <IconContext.Provider value={{ size: '1.15rem' }}>
            <div>
              <BiLeftArrow />
            </div>
          </IconContext.Provider>
        </button>
        <div className="track-container">
          <ul className="tutors-list carousel-track">
            {tutors.map((item, i) => (
              <li
                key={item.id}
                data-index={i}
                className={
                  i === 0 ? 'carousel-slide current-slide' : 'carousel-slide'
                }
                style={{ left: `${300 * i}px` }}
              >
                <Tutor obj={item} />
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="next pointer-btn"
          onClick={() => {
            moveNext();
          }}
          style={{ zIndex: 55555 }}
        >
          <IconContext.Provider value={{ size: '1.15rem' }}>
            <div>
              <BiRightArrow />
            </div>
          </IconContext.Provider>

        </button>
      </div>
    </section>
  );
};

export default MainPage;
