/*eslint-disable*/

// API data

const SIGNUPURL = 'http://127.0.0.1:3000/api/v1/signup';

const FULLFILED = 'quickmaths-frontend/user/user-signup/FULLFILED';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const createUser = (obj) => async (dispatch) => fetch(SIGNUPURL, {
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

const userSignupReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    default:
      return state;
  }
};

export default userSignupReducer;
