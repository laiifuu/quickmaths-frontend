import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTutor } from '../../redux/user/additem-redux';
import './additem.scss';

const AddItem = () => {
  const dispatch = useDispatch();

  const [overlay, setOverlay] = useState(false);

  const redirection = useNavigate();

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [fee, setFee] = useState('');
  const [experience, setExperience] = useState('');

  const obj = {
    first_name: fName,
    last_name: lName,
    photo_url: image,
    description: desc,
    hourly_fee: fee,
    experience,
  };

  const postData = () => {
    dispatch(createTutor(obj));
    localStorage.setItem('created', true);
  };

  useEffect(() => {
    if (localStorage.getItem('created')) {
      setOverlay(true);
      localStorage.removeItem('created');
      setTimeout(() => {
        redirection('/');
      }, 2500);
    }
  }, [redirection]);

  return (
    <section className="add-item flex">
      <div>
        <h1>Add a tutor</h1>
      </div>
      <form action="" className="user-form flex">
        <label htmlFor="first_name" className="flex">
          First Name
          <input
            type="input"
            name="first_name"
            id="first_name"
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="last_name" className="flex">
          Last Name
          <input
            type="input"
            name="last_name"
            id="last_name"
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="image" className="flex">
          Image
          {' '}
          <em>(url)</em>
          <input
            type="url"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <label htmlFor="description" className="flex">
          Description
          <input
            type="text"
            name="description"
            id="description"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="minimum of 20 characters"
            minLength="20"
            maxLength="120"
            required
          />
        </label>
        <label htmlFor="hourly_fee" className="flex">
          Hourly fee
          <input
            type="number"
            name="hourly_fee"
            id="hourly_fee"
            onChange={(e) => setFee(e.target.value)}
            required
          />
        </label>
        <label htmlFor="experience" className="flex">
          Experience
          <input
            type="number"
            name="experience"
            id="experience"
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          name="additem"
          className="session-btn"
          onClick={postData}
        >
          Add tutor
        </button>
      </form>
      <div
        className="overlay"
        style={{
          display: overlay ? 'flex' : 'none',
        }}
      >
        <p>Tutor successfully created!</p>
      </div>
      {/* <div
        className='overlay'
        style={{
          display: overlay ? 'flex' : 'none',
        }}
      >
        <p>Tutor could not be create!</p>
      </div> */}
    </section>
  );
};

export default AddItem;
