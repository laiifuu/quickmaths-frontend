import { setRemoveReservationsAction } from '../user/session-redux';

// Actions
const SET_TUTORS = 'tutors/tutors/SET_TUTORS';
const FULLFILED = 'tutors/tutors/FULLFILED';
const STATUS = 'tutors/tutors/STATUS';
const CLEAR = 'tutors/tutors/CLEAR';
const DELETE_TUTOR = 'tutors/tutors/DELETE_TUTOR';
const LINK = 'http://127.0.0.1:3000/api/v1/tutors';

// initial state
const initialState = {
  tutors: [],
  message: '',
};

// Reducer
export default function tutorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TUTORS:
      return { tutors: [...action.payload] };
    case FULLFILED:
      return {
        tutors: [...state.tutors, action.payload.obj],
        message: action.payload.msg,
      };
    case STATUS:
      return {
        tutors: [...state.tutors],
        message: action.payload,
      };
    case CLEAR:
      return {
        tutors: [...state.tutors],
        message: action.payload,
      };
    case DELETE_TUTOR:
      return {
        tutors: [...state.tutors.filter((item) => item.id !== action.payload)],
      };
    default:
      return state;
  }
}

// Action Creators
const setTutorsAction = (tutorsList) => ({
  type: SET_TUTORS,
  payload: tutorsList,
});

const fullfiled = (obj, msg) => ({
  type: FULLFILED,
  payload: { obj, msg },
});

const status = (msg) => ({
  type: STATUS,
  payload: msg,
});

const clear = () => ({
  type: CLEAR,
  payload: '',
});

const deleteTutor = (id) => ({
  type: DELETE_TUTOR,
  payload: id,
});

const fetchTutors = () => async (dispatch) => {
  await fetch(LINK, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((res) => {
      const tutorsList = res.map((item) => ({
        id: item.id,
        firstName: item.first_name,
        lastName: item.last_name,
        description: item.description,
        fbLink: item.fb_link ? item.fb_link : 'blank',
        igLink: item.ig_link ? item.ig_link : 'blank',
        twitterLink: item.twitter_link ? item.twitter_link : 'blank',
        photoUrl: item.photo_url,
        hourlyFee: item.hourly_fee,
        experience: item.experience,
        rating: item.rating ? item.rating : 0,
      }));
      dispatch(setTutorsAction(tutorsList));
    });
};

const addTutor = (obj) => async (dispatch) => fetch(LINK, {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((data) => {
    if (data.tutor_obj) {
      const tutorObj = {
        id: data.tutor_obj.id,
        firstName: data.tutor_obj.first_name,
        lastName: data.tutor_obj.last_name,
        description: data.tutor_obj.description,
        fbLink: data.tutor_obj.fb_link ? data.tutor_obj.fb_link : 'blank',
        igLink: data.tutor_obj.ig_link ? data.tutor_obj.ig_link : 'blank',
        twitterLink: data.tutor_obj.twitter_link ? data.tutor_obj.twitter_link : 'blank',
        photoUrl: data.tutor_obj.photo_url,
        hourlyFee: data.tutor_obj.hourly_fee,
        experience: data.tutor_obj.experience,
        rating: data.tutor_obj.rating ? data.tutor_obj.rating : 0,
      };
      dispatch(fullfiled(tutorObj, data.message));
    } else {
      dispatch(status('Tutor already exists'));
    }
  });

const destroyTutor = (id) => async (dispatch) => fetch(`http://127.0.0.1:3000/api/v1/tutors/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((data) => {
    if (data.message === 'Tutor has been destroyed successfully!') {
      dispatch(deleteTutor(id));
      dispatch(setRemoveReservationsAction(id));
    }
  });

export {
  fetchTutors, setTutorsAction,
  fullfiled, addTutor, destroyTutor,
  clear, status, deleteTutor,
};
