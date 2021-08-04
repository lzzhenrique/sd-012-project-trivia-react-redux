export const GET_TOKEN_SUCESS = 'GET_TOKEN_SUCESS';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const GET_QUIZ = 'GET_QUIZ';
export const FETCHING_QUIZ = 'FETCHING_QUIZ';
export const FETCH_QUIZ_FAIL = 'FETCH_QUIZ_FAIL';
export const TIMEOUT_FALSE = 'TIMEOUT_FALSE';
export const TIMEOUT_TRUE = 'TIMEOUT_TRUE';

export const timeoutFalse = () => ({ type: TIMEOUT_FALSE });
export const timeoutTrue = () => ({ type: TIMEOUT_TRUE });

export const getQuiz = (payload) => ({ type: GET_QUIZ, payload });
export const fetchingQuiz = () => ({ type: FETCHING_QUIZ });
// export const fethingQuizFail = (payload) => ({ type: FETCH_QUIZ_FAIL, payload });

export const getGravatar = (payload) => ({ type: FETCH_SUCCESS, payload });

export const actionGetTokenSucess = (state) => ({ type: GET_TOKEN_SUCESS, state });
export const actionGetTokenError = { type: GET_TOKEN_ERROR };
