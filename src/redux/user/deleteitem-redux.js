/*eslint-disable*/

// API data

const TUTORSURL = 'http://127.0.0.1:3000/api/v1/tutors';

const FULLFILED = 'quickmaths-frontend/user/deleteitem-redux/FULLFILED';
const REMOVE = 'quickmaths-frontend/user/deleteitem-redux/REMOVE';
const MESSAGE = 'quickmaths-frontend/user/deleteitem-redux/MESSAGE';

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const remove = (id) => ({
  type: REMOVE,
  payload: { id },
});


export const fetchTutors = () => async (dispatch) => fetch(TUTORSURL)
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(data))
  });

export const deleteTutor = (id) => async (dispatch) => fetch(`http://127.0.0.1:3000/api/v1/tutors/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => res.json())
  .then(() => {
    dispatch(remove(id))
  });

const deleteReducer = (state = [], action) => {
  switch (action.type) {
    case FULLFILED:
      return action.payload.obj;
    case REMOVE:
      return {
        ...state.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default deleteReducer;
