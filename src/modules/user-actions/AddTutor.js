/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTutor, clear } from '../../redux/tutors/tutors';

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

  const returnMsg = useSelector((state) => state.tutors);

  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));

  const postData = (data) => {
    const obj = { ...data };
    if (data.ig_link === '') {
      delete obj.ig_link;
    }
    if (data.twitter_link === '') {
      delete obj.twitter_link;
    }
    if (data.fb_link === '') {
      delete obj.fb_link;
    }
    dispatch(addTutor(obj));
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => {
        redirection('/user/login');
      }, 2000);
    }
    if (returnMsg) {
      if (returnMsg.message === 'Tutor has been created successfully!') {
        setOverlay(true);
        setTimeout(() => {
          dispatch(clear());
          redirection('/');
        }, 2500);
      } else if (returnMsg.message === 'Tutor already exists') {
        setOverlay(true);
        setTimeout(() => {
          dispatch(clear());
          setOverlay(false);
        }, 2500);
      }
    }
  }, [returnMsg, dispatch, redirection, isLoggedIn]);

  if (isLoggedIn) {
    return (
      <section className="add-tutor-page">
        <h1>ADD A TUTOR</h1>
        <div className="add-tutor-page-divider" />

        <form
          action=""
          className="add-tutor-form"
          onSubmit={handleSubmit(postData)}
        >
          <input
            type="input"
            name="first_name"
            placeholder="First Name*"
            {...register('first_name', {
              required: {
                value: true,
                message: 'First name is a required field',
              },
              pattern: {
                value: /^((?![0-9.,!?:;_|+\-*\\/=%°@&#§$"'`¨^ˇ()\]<>{}])[\S])+$/i,
                message: 'First name can ony include letters',
              },
            })}
          />

          <input
            type="input"
            name="last_name"
            placeholder="Last Name*"
            {...register('last_name', {
              required: {
                value: true,
                message: 'Last name is a required field',
              },
              pattern: {
                value: /^((?![0-9.,!?:;_|+\-*\\/=%°@&#§$"'`¨^ˇ()\]<>{}])[\S])+$/i,
                message: 'Last name can only include letters',
              },
            })}
          />

          <input
            type="input"
            name="photo_url"
            placeholder="domain.com/something.jpg*"
            {...register('photo_url', {
              required: {
                value: true,
                message: 'Photo url is a required field',
              },
              pattern: {
                value: /([a-z\-_0-9]*\.(jpg|jpeg|png|gif))/i,
                message: 'Please add a valid link for the photo url',
              },
            })}
          />

          <input
            type="number"
            name="hourly_fee"
            placeholder="Hourly fee $$*"
            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
            {...register('hourly_fee', {
              required: {
                value: true,
                message: 'Hourly fee is a required field',
              },
              min: {
                value: 0,
                message: 'Hourly fee must be greater than 0',
              },
              max: {
                value: 50,
                message: 'Hourly fee can not be greater than 50',
              },
            })}
          />

          <input
            type="number"
            name="experience"
            placeholder="Exp (years)*"
            onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
            {...register('experience', {
              required: {
                value: true,
                message: 'Experience is a required field',
              },
              min: {
                value: 0,
                message: 'Experience must be greater than 0',
              },
              max: {
                value: 50,
                message: 'Experience can not be greater than 50',
              },
            })}
          />

          <input
            type="input"
            name="ig_link"
            placeholder="https://www.instagram.com/your_page*"
            {...register('ig_link', {
              pattern: {
                value:
                  /(http(s)?:\/\/)?(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)\/?/i,
                message: 'Please add a valid link for the instagram profile',
              },
            })}
          />

          <input
            type="input"
            name="twitter_link"
            placeholder="https://twitter.com/your_page"
            {...register('twitter_link', {
              pattern: {
                value:
                  /(http(s)?:\/\/)?(www\.)?twitter\.com\/[A-z 0-9 _]{1,15}\/?/i,
                message: 'Please add a valid link for the twitter profile',
              },
            })}
          />

          <input
            type="input"
            name="fb_link"
            placeholder="https://www.facebook.com/your_page"
            {...register('fb_link', {
              pattern: {
                value:
                  /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w]*\/)*([\w]*)/i,
                message: 'Please add a valid link for the facebook profile',
              },
            })}
          />

          <textarea
            type="text"
            name="description"
            placeholder="Please introduce yourself*"
            {...register('description', {
              required: {
                value: true,
                message: 'Description is a required field',
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

          <ul className="error-messages">
            {errors.first_name && (
              <li className="errorMsg">{errors.first_name.message}</li>
            )}

            {errors.last_name && (
              <li className="errorMsg">{errors.last_name.message}</li>
            )}

            {errors.photo_url && (
              <li className="errorMsg">{errors.photo_url.message}</li>
            )}

            {errors.description && (
              <li className="errorMsg">{errors.description.message}</li>
            )}

            {errors.hourly_fee && (
              <li className="errorMsg">{errors.hourly_fee.message}</li>
            )}

            {errors.experience && (
              <li className="errorMsg">{errors.experience.message}</li>
            )}

            {errors.ig_link && (
              <li className="errorMsg">{errors.ig_link.message}</li>
            )}

            {errors.twitter_link && (
              <li className="errorMsg">{errors.twitter_link.message}</li>
            )}

            {errors.fb_link && (
              <li className="errorMsg">{errors.fb_link.message}</li>
            )}
          </ul>

          <button type="submit" name="additem" className="session-btn">
            Add tutor
          </button>
        </form>

        <div className={`popup-message ${overlay ? '' : 'hidden'}`}>
          <p>{returnMsg.message}</p>
        </div>
      </section>
    );
  }

  return (
    <div className="popup-message">
      <p>Please login to view this page</p>
    </div>
  );
};

export default AddTutor;
