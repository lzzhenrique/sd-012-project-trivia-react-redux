import {
  USER_PLAYER,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  NEXT_QUESTIONS,
  CHANGE_CLASS,
  CORRECT_ANSWER,
} from './actionsTypes';

export const addPlayerInfo = (loginInfo) => ({
  type: USER_PLAYER,
  loginInfo,
});

export const getQuestions = () => ({ type: GET_QUESTIONS });

export const getQuestionsSuccess = (payload) => ({
  type: GET_QUESTIONS_SUCCESS,
  payload,
});

export const getQuestionsError = (error) => ({
  type: GET_QUESTIONS_ERROR,
  error,
});

export const nextQuestion = () => ({
  type: NEXT_QUESTIONS,
});

export const changeClass = (correct, wrong) => ({
  type: CHANGE_CLASS,
  correct,
  wrong,
});

export const correctAnswer = () => ({
  type: CORRECT_ANSWER,
});

export const fetchAPI = () => (dispatch) => {
  dispatch(getQuestions());
  const token = localStorage.getItem('token');
  const endpoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  fetch(endpoint)
    .then((data) => data.json())
    .then((response) => dispatch(getQuestionsSuccess(response.results)))
    .catch((err) => dispatch(getQuestionsError(err)));
};
