export const getLogin = (value) => ({
  type: 'LOGIN',
  ...value,
});

// export const saveToken = (value) => ({
//   type: 'TOKEN',
//   ...value,
// });

// export const getQuestion = (value) => ({
//   type: 'QUESTION',
//   value,
// });

// export const getAPI = () => async (dispatch) => {
//   let request = await fetch('https://opentdb.com/api_token.php?command=request');
//   request = await request.json();
//   localStorage.setItem('token', JSON.stringify(request.token));
//   try {
//     return dispatch(saveToken(request));
//   } catch (error) {
//     return dispatch(saveToken(error));
//   }
// };

// export const getTriviaAPI = (token) => async (dispatch) => {
//   const questionsNumber = 1;
//   let request = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&token=${token}`);
//   request = await request.json();
//   try {
//     return dispatch(getQuestion(request));
//   } catch (error) {
//     return dispatch(getQuestion(error));
//   }
// };

export const GET_TOKEN_LOADING = 'GET_TOKEN_LOADING';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';

const getTokenLoading = () => ({ type: GET_TOKEN_LOADING });
const getTokenSuccess = (token) => ({ type: GET_TOKEN_SUCCESS, payload: token });
const getTokenError = (erro) => ({ type: GET_TOKEN_ERROR, payload: erro });

export const getToken = () => async (dispatch) => {
  dispatch(getTokenLoading());
  const URL = 'https://opentdb.com/api_token.php?command=request';
  try {
    const response = await fetch(URL);
    const token = await response.json();
    dispatch(getTokenSuccess(token));
    localStorage.setItem('token', token.token);
  } catch (err) {
    dispatch(getTokenError(err));
  }
};
