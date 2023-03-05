// Actions
const SET_TUTORS = 'tutors/tutors/SET_TUTORS';
const LINK = 'http://127.0.0.1:3000/api/v1/tutors';

// initial state
const initialState = {
  tutors: [],
};

// Reducer
export default function tutorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TUTORS:
      return { tutors: [...action.payload] };

    default:
      return state;
  }
}

// Action Creators
const setTutorsAction = (tutorsList) => ({
  type: SET_TUTORS,
  payload: tutorsList,
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

export { fetchTutors, setTutorsAction };
