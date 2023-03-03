import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Tutor = (props) => {
  const { obj } = props;

  return (
    <div className="tutor-card">
      <div className="profile-pic-container">
        <img src={obj.photoUrl} alt="Tutor profile portrait" />
      </div>

      <Link to={`/tutor/${obj.id}`}><h2>{`${obj.firstName} ${obj.lastName}`}</h2></Link>

      <div className="divider">
        {
          [...Array(20)].map(() => <div key={Math.random(100)} className="divider-bullet" />)
        }
      </div>

      <div className="tutor-description">
        {`${obj.description.substring(0, 70)}...`}
      </div>

      <ul className="tutor-social-links">
        <li key="1"><a href={obj.igLink} className="tutor-sm-link" aria-label="ig link"><FaInstagram /></a></li>
        <li key="2"><a href={obj.twitterLink} className="tutor-sm-link" aria-label="twitter link"><FaTwitter /></a></li>
        <li key="3"><a href={obj.fbLink} className="tutor-sm-link" aria-label="fb link"><FaFacebookF /></a></li>
      </ul>
    </div>
  );
};

Tutor.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  }).isRequired,
};

export default Tutor;
