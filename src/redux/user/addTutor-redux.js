/*eslint-disable*/

// API data

const APIURL = 'http://127.0.0.1:3000/api/v1/tutors';

const FULLFILED = 'quickmaths-frontend/user/additem-redux/FULLFILED';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const addTutor = (obj) => async (dispatch) => fetch(APIURL, {
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

const addReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    default:
      return state;
  }
};

export default addReducer;
