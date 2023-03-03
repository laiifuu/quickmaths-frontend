// Actions
const ADD_RESERVATION = 'reservations/reseravtions/ADD_RESERVATION';
// const SET_RESERVATIONS = 'reservations/reservations/SET_RESERVATIONS';
const REMOVE_MSG = 'reservations/reservations/REMOVE8MSG';

const CREATE_RESERVATION_LINK = 'http://127.0.0.1:3000/api/v1/reservation';
// initial state
const initialState = {
  reservations: [],
  creationMsg: '',
};

// Reducer
export default function reservationsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESERVATION:
      return {
        reservations: [...state.reservations, action.payload.newReservation],
        creationMsg: action.payload.msg,
      };

    case REMOVE_MSG:
      return {
        reservations: [...state.reservations],
        creationMsg: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
const setReservationAction = (reservation) => ({
  type: ADD_RESERVATION,
  payload: reservation,
});

const setMsgAction = () => ({
  type: REMOVE_MSG,
  payload: '',
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

export { fetchReservation, setReservationAction, setMsgAction };
