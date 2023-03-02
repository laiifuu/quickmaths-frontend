/*eslint-disable*/
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTutor } from '../../redux/user/additem-redux';
import './additem.scss';

const AddItem = () => {
  const dispatch = useDispatch();

  const [overlay, setOverlay] = useState(false);
  // const [formData, setFormData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all"
  });

  const redirection = useNavigate();

  // const [first_name, setFName] = useState('');
  // const [last_name, setLName] = useState('');
  // const [photo_url, setImage] = useState('');
  // const [description, setDesc] = useState('');
  // const [fee, setFee] = useState('');
  // const [experience, setExperience] = useState('');

  // const obj = {
  //   first_name: fName,
  //   last_name: lName,
  //   photo_url: image,
  //   description: desc,
  //   hourly_fee: fee,
  //   experience,
  // };

  const postData = (data) => {
    // dispatch(createTutor(obj));
    // localStorage.setItem('created', true);
    console.log(data);
  };

  // useEffect(() => {
  //   if (localStorage.getItem('created')) {
  //     setOverlay(true);
  //     localStorage.removeItem('created');
  //     setTimeout(() => {
  //       redirection('/');
  //     }, 2500);
  //   }
  // }, [redirection]);

  return (
    <section className="add-item flex">
      <div>
        <h1>Add a tutor</h1>
      </div>
      <form action="" className="user-form flex" onSubmit={handleSubmit(postData)}>
        <label htmlFor="first_name" className="flex">
          First Name *
          <input
            type="input"
            name="first_name"
            placeholder='First Name'
            {...register('first_name',{
              required: true,
              pattern: {
                value: /[A-Za-z]/,
                message: 'First name can ony include letters'
              }
            })}
          />
        </label>
        {errors.first_name && <p className="errorMsg">{errors.first_name.message}</p>}
        <label htmlFor="last_name" className="flex">
          Last Name *
          <input
            type="input"
            name="last_name"
            placeholder='Last Name'
            {...register('last_name',{
              required: true,
              pattern: {
                value: /[A-Za-z]/,
                message: 'Last name can ony include letters'
              }
            })}
          />
        </label>
        {errors.last_name && <p className="errorMsg">{errors.last_name.message}</p>}
        <label htmlFor="photo_url" className="flex">
          <p className='photo-url'>Photo<em>{' '}(URL)</em> *</p>
          <input
            type="input"
            name="photo_url"
            placeholder='Photo URL'
            {...register('photo_url',{
              required: true
            })}
          />
        </label>
        <label htmlFor="description" className="flex">
          Description *
          <input
            type="text"
            name="description"
            placeholder='Description'
            {...register('description',{
              required: true,
              minLength: {
                value: 20,
                message: 'Description must have a minimum of 20 characters'
              },
              maxLength: {
                value: 120,
                message: 'Description can only have a maximum of 120 characters'
              },
            })}
          />
        </label>
        {errors.description && <p className="errorMsg">{errors.description.message}</p>}
        <label htmlFor="hourly_fee" className="flex">
          Hourly fee *
          <input
            type="number"
            name="hourly_fee"
            placeholder='Hourly Fee'
            {...register('hourly_fee',{
              required: true,
              min: {
                value: 0,
                message: "Hourly fee must be greater than 0"
              }
            })}
          />
        </label>
        {errors.hourly_fee && <p className="errorMsg">{errors.hourly_fee.message}</p>}
        <label htmlFor="experience" className="flex">
          Experience *
          <input
            type="number"
            name="experience"
            placeholder='Experience'
            {...register('experience',{
              required: true,
              min: {
                value: 0,
                message: "Experience must be greater than 0"
              }
            })}
          />
        </label>
        {errors.experience && <p className="errorMsg">{errors.experience.message}</p>}
        <label htmlFor="ig_link" className="flex">
          Instagram
          <input
            type="input"
            name="ig_link"
            placeholder='Instagram link'
            {...register('ig_link')}
          />
        </label>
        <label htmlFor="twitter_link" className="flex">
          Twitter
          <input
            type="input"
            name="twitter_link"
            placeholder='Twitter link'
            {...register('twitter_link')}
          />
        </label>
        <label htmlFor="fb_link" className="flex">
          FaceBook
          <input
            type="input"
            name="fb_link"
            placeholder='Facebook link'
            {...register('fb_link')}
          />
        </label>
        <button
          type="submit"
          name="additem"
          className="session-btn"
        >
          Add tutor
        </button>
      </form>
      {/* <div
        className="overlay"
        style={{
          display: overlay ? 'flex' : 'none',
        }}
      >
        <p>Tutor successfully created!</p>
      </div> */}
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
