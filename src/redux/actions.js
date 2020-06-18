import { SET_NEW_QUESTIONS_ORDER, SET_NEW_COLUMNS_ORDER, CAN_DRAG, SET_NEW_QUESTIONS } from './constants';

export const setNewQuestionsOrder = (payload) => ({
  type: SET_NEW_QUESTIONS_ORDER,
  payload,
});

export const setNewQuestions = (payload) => ({
  type: SET_NEW_QUESTIONS,
  payload,
});

export const canDrag = () => ({
  type: CAN_DRAG,
});

export const setNewColumnsOrder = () => ({
  type: SET_NEW_COLUMNS_ORDER,
});
