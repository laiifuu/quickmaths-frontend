import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTutor, fetchTutors } from '../../redux/user/deletetutor-redux';
import './user-actions.scss';

const DeleteItem = () => {
  const dispatch = useDispatch();

  const availableTutors = useSelector((store) => store.delete);

  const holder = availableTutors;

  const removeData = (e) => {
    const id = e.target.value;
    dispatch(deleteTutor(id));
    window.location.reload(false);
  };

  useEffect(() => {
    dispatch(fetchTutors());
  }, [dispatch]);

  return (
    <section className="delete-item flex">
      <div>
        <h1>Delete a tutor</h1>
      </div>
      <ul className="available-item flex">
        {
          holder.map((item) => (
            <li
              className="item flex"
              key={item.id}
            >
              <p>
                {item.first_name}
                {' '}
                {item.last_name}
              </p>
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
          ))
        }
      </ul>
    </section>
  );
};

export default DeleteItem;
