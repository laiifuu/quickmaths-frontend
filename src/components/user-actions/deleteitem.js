import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTutor } from '../../redux/user/additem-redux';
import { fetchTutors, remove } from '../../redux/user/deleteitem-redux';
import './user-actions.scss';

const AddItem = () => {
  const dispatch = useDispatch();

  const availableTutors = useSelector((store) => store.deleteReducer);

  // const redirection = useNavigate();


  const removeData = (e) => {
    let id = e.target.value
    // dispatch(remove(id));
    dispatch(deleteTutor(id));
  };

  useEffect(() => {
    dispatch(fetchTutors());
  });

  return (
    <section className="delete-item flex">
      <div>
        <h1>Remove a tutor</h1>
      </div>
      <ul className='available-item'>
        {
          availableTutors.map((item, idx) => (
            <li
              className='item flex'
              key={idx}
            >
              <div className='item-content flex'>
                <p>
                  {item.first_name}
                  {' '}
                  {item.last_name}
                </p>
                <button
                  type='button'
                  name='delete'
                  className='delete-btn'
                  value={item.id}
                  onClick={removeData}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default AddItem;
