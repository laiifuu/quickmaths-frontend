// Actions
const SET_RESERVATION = 'reservations/reseravtions/SET_RESERVATION';
const CREATE_RESERVATION_LINK = 'http://127.0.0.1:3000/api/v1/reservation';

// initial state
const initialState = {
  reservation: '',
};

// Reducer
export default function reservationsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESERVATION:
      return { reservation: action.payload };

    default:
      return state;
  }
}

// Action Creators
const setReservationAction = (reservation) => ({
  type: SET_RESERVATION,
  payload: reservation,
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
      dispatch(setReservationAction(res));
    });
};

export { fetchReservation, setReservationAction };
