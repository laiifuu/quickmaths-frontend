import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

const SingleTutor = () => {
  const { id } = useParams();
  const tutor = useSelector((state) => state.tutors.tutors).find(
    (item) => item.id === Number(id),
  );
  const state = useSelector((state) => state.tutors.tutors);

  if (!tutor && state.length === 0) {
    return <div className="loading">Loading</div>;
  }
  if (!tutor && state.length !== 0) {
    return <div className="loading">Element not found</div>;
  }
  return (
    <section className="tutor-details-page">
      <div className="tutor-photo-container">
        <img
          src={tutor.photoUrl}
          alt="tutor"
          className="detailsPageTutorPhoto"
        />
      </div>
      <div className="tutor-details-container">
        <h1>
          {tutor.firstName}
          {' '}
          {tutor.lastName}
        </h1>
        <p className="tutor-description">
          {tutor.description}
        </p>
        <ul className="details">
          <li>
            <span>Hourly fee: </span>
            <span>
              {tutor.hourlyFee}
              $
            </span>
          </li>
          <li>
            <span>Years of experience: </span>
            <span>{tutor.experience}</span>
          </li>
          <li>
            <span>Rating: </span>
            <span>{tutor.rating}</span>
          </li>
        </ul>
        <ul className="tutor-social-links">
          <li>
            <a
              href={
                tutor.fbLink !== 'blank' ? tutor.fbLink : 'https://facebook.com'
              }
              className="tutor-sm-link"
              target="_blank"
              rel="noreferrer"
              aria-label="facebook page"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href={
                tutor.igLink !== 'blank' ? tutor.igLink : 'https://instagram.com'
              }
              className="tutor-sm-link"
              target="_blank"
              rel="noreferrer"
              aria-label="instagram page"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href={
                tutor.twitterLink !== 'blank'
                  ? tutor.twitterLink
                  : 'https://twitter.com'
              }
              className="tutor-sm-link"
              target="_blank"
              rel="noreferrer"
              aria-label="twitter page"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
        <Link
          className="makeReservationButton"
          to="/reserve"
          state={{ chosenTutorId: tutor.id }}
        >
          <button type="button">
            Make reservation
            <IoChevronForwardCircleOutline className="reserve-arrow-icon" />

          </button>
        </Link>
      </div>
    </section>
  );
};

export default SingleTutor;
