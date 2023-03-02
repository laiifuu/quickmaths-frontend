/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { aftermath, addTutor } from '../../redux/user/addTutor-redux';
import './additem.scss';

const AddTutor = () => {
  const dispatch = useDispatch();

  const [overlay, setOverlay] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const redirection = useNavigate();

  const returnMsg = useSelector((state) => state.add);

  const postData = (data) => {
    dispatch(addTutor(data));
  };

  useEffect(() => {
    if (returnMsg) {
      if (returnMsg.message === 'Tutor has been created successfully!') {
        setOverlay(true);
        setTimeout(() => {
          dispatch(aftermath());
          redirection('/');
        }, 2500);
      } else if (returnMsg.status === 500) {
        setOverlay(true);
        setTimeout(() => {
          setOverlay(false);
          window.location.reload(false);
        }, 2500);
      }
    }
  }, [returnMsg, dispatch, redirection]);

  return (
    <section className="add-item flex">
      <div className="add-item-header">
        <h1>Add a tutor</h1>
        <p>(* indicates a required field)</p>
      </div>
      <form action="" className="user-form flex" onSubmit={handleSubmit(postData)}>
        <div className="wrapper">

          <div className="container flex">
            <label htmlFor="first_name" className="flex">
              First Name *
              <input
                type="input"
                name="first_name"
                placeholder="First Name"
                {...register('first_name', {
                  required: {
                    value: true,
                    message: 'Required field',
                  },
                  pattern: {
                    value: /[A-Za-z]/,
                    message: 'First name can ony include letters',
                  },
                })}
              />
            </label>
            {errors.first_name && <p className="errorMsg">{errors.first_name.message}</p>}
            <label htmlFor="last_name" className="flex">
              Last Name *
              <input
                type="input"
                name="last_name"
                placeholder="Last Name"
                {...register('last_name', {
                  required: {
                    value: true,
                    message: 'Required field',
                  },
                  pattern: {
                    value: /[A-Za-z]/,
                    message: 'Last name can ony include letters',
                  },
                })}
              />
            </label>
            {errors.last_name && <p className="errorMsg">{errors.last_name.message}</p>}
            <label htmlFor="photo_url" className="flex">
              <p className="photo-url">
                Photo
                <em>
                  {' '}
                  (URL)
                </em>
                {' '}
                *
              </p>
              <input
                type="input"
                name="photo_url"
                placeholder="Photo URL"
                {...register('photo_url', {
                  required: {
                    value: true,
                    message: 'Required field',
                  },
                })}
              />
            </label>
            {errors.photo_url && <p className="errorMsg">{errors.photo_url.message}</p>}
            <label htmlFor="description" className="flex">
              Description *
              <input
                type="text"
                name="description"
                placeholder="Description"
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Required field',
                  },
                  minLength: {
                    value: 20,
                    message: 'Description must have a minimum of 20 characters',
                  },
                  maxLength: {
                    value: 120,
                    message: 'Description can only have a maximum of 120 characters',
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
                placeholder="Hourly Fee"
                {...register('hourly_fee', {
                  required: {
                    value: true,
                    message: 'Required field',
                  },
                  min: {
                    value: 0,
                    message: 'Hourly fee must be greater than 0',
                  },
                })}
              />
            </label>
            {errors.hourly_fee && <p className="errorMsg">{errors.hourly_fee.message}</p>}
          </div>
          <div className="container flex">
            <label htmlFor="experience" className="flex">
              Experience *
              <input
                type="number"
                name="experience"
                placeholder="Experience"
                {...register('experience', {
                  required: {
                    value: true,
                    message: 'Required field',
                  },
                  min: {
                    value: 0,
                    message: 'Experience must be greater than 0',
                  },
                })}
              />
            </label>
            {errors.experience && <p className="errorMsg">{errors.experience.message}</p>}
            <label htmlFor="ig_link" className="flex">
              Instagram
              <input
                type="input"
                name="ig_link"
                placeholder="Instagram link"
                {...register('ig_link')}
              />
            </label>
            <label htmlFor="twitter_link" className="flex">
              Twitter
              <input
                type="input"
                name="twitter_link"
                placeholder="Twitter link"
                {...register('twitter_link')}
              />
            </label>
            <label htmlFor="fb_link" className="flex">
              FaceBook
              <input
                type="input"
                name="fb_link"
                placeholder="Facebook link"
                {...register('fb_link')}
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          name="additem"
          className="session-btn"
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
        <p>{returnMsg.message ? returnMsg.message : 'Tutor already exists'}</p>
      </div>
    </section>
  );
};

export default AddTutor;
