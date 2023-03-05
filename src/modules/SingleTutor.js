import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SingleTutor.scss';

const SingleTutor = () => {
  const { id } = useParams();
  const tutor = useSelector((state) => state.tutors.tutors).find((item) => item.id === Number(id));
  const state = useSelector((state) => state.tutors.tutors);

  if (!tutor && state.length === 0) {
    return (<div className="loading">Loading</div>);
  } if (!tutor && state.length !== 0) {
    return (<div className="loading">Element not found</div>);
  }
  return (
    <div className="detailsPageContainer">
      <img src={tutor.photoUrl} alt="tutor" className="detailsPageTutorPhoto" />
      <div>
        <div className="text-center font-2rem line-height15">
          {tutor.firstName}
          {' '}
          {tutor.lastName}
        </div>
        <div className="font-gray detailsPageTutorDescription">
          {tutor.description}
        </div>
        <ul className="socialLinks">
          <li>
            <a href={tutor.fbLink !== 'blank' ? tutor.fbLink : 'https://facebook.com'} target="_blank" rel="noreferrer" aria-label="facebook page"><i className="fa-brands fa-facebook-f fa-1.2x" /></a>
          </li>
          <li>
            <a href={tutor.igLink !== 'blank' ? tutor.igLink : 'https://facebook.com'} target="_blank" rel="noreferrer" aria-label="twitter page"><i className="fa-brands fa-twitter fa-1.2x" /></a>
          </li>
          <li>
            <a href={tutor.twitterLink !== 'blank' ? tutor.twitterLink : 'https://facebook.com'} target="_blank" rel="noreferrer" aria-label="instagram page"><i className="fa-brands fa-instagram fa-1.2x" /></a>
          </li>
        </ul>
        <ul className="detailsPageGrid">
          <li>
            <span>Hourly fee: </span>
            {tutor.hourlyFee}
            $
          </li>
          <li>
            <span>Years of experience: </span>
            {tutor.experience}
          </li>
          <li>
            <span>Rating: </span>
            {tutor.rating}
          </li>
        </ul>
        <Link className="makeReservationButton" to="/reserve" state={{ chosenTutorId: tutor.id }}>Make reservation</Link>
      </div>
    </div>
  );
};

export default SingleTutor;
