/*eslint-disable*/

// API data

const LOGINURL = 'http://127.0.0.1:3000/api/v1/login';

const FULLFILED = 'quickmaths-frontend/user/user-login/FULLFILED';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const fetchUserReservation = (obj) => async (dispatch) => fetch(LOGINURL, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(data))
  });

const userLoginReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    default:
      return state;
  }
};

export default userLoginReducer;
