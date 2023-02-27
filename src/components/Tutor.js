import PropTypes from 'prop-types';

const Tutor = (props) => {
  const { obj } = props;

  return (
    <div className="tutor-card">
      <div>
        <img src={obj.photoUrl} alt="Tutor profile portrait" />
      </div>

      <h2>{`${obj.firstName} ${obj.lastName}`}</h2>

      <div className="divider">
        {
          Array(20).map((e) => <div key={e.toString()} className="divider-bullet" />)
        }
      </div>

      <div className="tutor-description">
        {obj.description}
      </div>

      <ul className="tutor-social-links">
        <li key="1"><a href={obj.igLink}>instagram</a></li>
        <li key="2"><a href={obj.twitterLink}>twitter</a></li>
        <li key="3"><a href={obj.fbLink}>facebook</a></li>
      </ul>
    </div>
  );
};

Tutor.propTypes = {
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
  }).isRequired,
};

export default Tutor;
