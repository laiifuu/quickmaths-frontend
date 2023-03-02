/*eslint-disable*/

// API data

const APIURL = 'http://127.0.0.1:3000/api/v1/tutors';

const FULLFILED = 'quickmaths-frontend/user/additem-redux/FULLFILED';

const AFTERMATH = 'quickmaths-frontend/user/additem-redux/AFTERMATH';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const aftermath = () => ({
  type: AFTERMATH,
});

export const createTutor = (obj) => async (dispatch) => fetch(APIURL, {
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

const createTutorReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    case AFTERMATH:
      return [];
    default:
      return state;
  }
};

export default createTutorReducer;
