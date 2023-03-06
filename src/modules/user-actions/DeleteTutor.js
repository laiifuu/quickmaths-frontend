import { useDispatch, useSelector } from 'react-redux';
import { destroyTutor } from '../../redux/tutors/tutors';

import './user-actions.scss';

const DeleteItem = () => {
  const dispatch = useDispatch();

  const availableTutors = useSelector((store) => store.tutors.tutors);

  const removeData = (e) => {
    const id = Number(e.target.value);
    dispatch(destroyTutor(id));
  };

  if (availableTutors.length === 0) {
    return (
      <div className='flexMessage'>
        <div>
          There are no tutors available
        </div>
      </div>
    );
  }

  return (
    <section className="delete-item flex">
      <div>
        <h1>Delete a tutor</h1>
      </div>
      <ul className="available-item flex">
        {
          availableTutors.map((item) => (
            <li
              className="item flex"
              key={item.id}
            >
              <p>
                {item.firstName}
                {' '}
                {item.lastName}
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
