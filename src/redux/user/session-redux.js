// API data

// Actions
const FULLFILED = 'quickmaths-frontend/user/user-signup/FULLFILED';
const ADD_RESERVATION = 'reservations/reseravtions/ADD_RESERVATION';
const REMOVE_MSG = 'reservations/reservations/REMOVE8MSG';
const CREATE_RESERVATION_LINK = 'http://127.0.0.1:3000/api/v1/reservation';

// Initial state
const initialState = {
  user: {},
  reservations: [],
  message: '',
  creationMsg: '',
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FULLFILED:
      return {
        ...state,
        ...action.payload.obj,
      };

    case ADD_RESERVATION:
      if (action.payload.newReservation) {
        return {
          ...state,
          reservations: [...state.reservations, action.payload.newReservation],
          creationMsg: action.payload.msg,
        };
      }
      return {
        ...state,
        creationMsg: action.payload.msg,
      };

    case REMOVE_MSG:
      return {
        ...state,
        creationMsg: action.payload,
      };

    default:
      return state;
  }
};

// Action Creators
const setReservationAction = (reservation) => ({
  type: ADD_RESERVATION,
  payload: reservation,
});

const setMsgAction = () => ({
  type: REMOVE_MSG,
  payload: '',
});

const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

const userSession = (obj, endpoint) => async (dispatch) => fetch(`http://127.0.0.1:3000/api/v1/${endpoint}`, {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(data));
  });

const fetchReservation = (data) => async (dispatch) => {
  await fetch(CREATE_RESERVATION_LINK, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((result) => result.json())
    .then((res) => {
      const result = {
        msg: res.message,
        newReservation: res.reservation_obj,
      };
      dispatch(setReservationAction(result));
    });
};

export default userReducer;
export {
  fullfiled, userSession, fetchReservation, setReservationAction, setMsgAction,
};
