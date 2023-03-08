import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { destroyTutor } from '../../redux/tutors/tutors';

const DeleteItem = () => {
  const dispatch = useDispatch();

  const redirection = useNavigate();

  const availableTutors = useSelector((store) => store.tutors.tutors);

  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));

  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => {
        redirection('/user/login');
      }, 2000);
    }
  });

  const removeData = (e) => {
    const id = Number(e.target.value);
    dispatch(destroyTutor(id));
  };

  if (isLoggedIn) {
    return (
      <section className="delete-tutor-page">
        <h1>Delete a tutor</h1>

        {availableTutors.length !== 0 ? (
          <ul className="available-tutors-list">
            {availableTutors.map((item) => (
              <li className="available-tutor" key={item.id}>
                <span>
                  {item.firstName}
                  {' '}
                  {item.lastName}
                </span>
                <button
                  type="button"
                  name="delete"
                  className="delete-btn"
                  value={item.id}
                  onClick={removeData}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-items-available">
            <div>There are no tutors available.</div>
            <button type="button"><Link to="/"> Go back to the home page</Link></button>
          </div>
        )}
      </section>
    );
  }
  return (
    <section className="flexContainer">
      <div>Please log in to access this page</div>
    </section>
  );
};

export default DeleteItem;
