import {
  SET_NEW_QUESTIONS_ORDER,
  SET_NEW_ALL_QUESTIONS_ORDER,
  SET_NEW_COLUMNS_ORDER,
  CAN_DRAG
} from './constants';

export const setNewQuestionsOrder = (payload) => ({
  type: SET_NEW_QUESTIONS_ORDER,
  payload,
});

export const setNewAllQuestionsOrder = (payload) => ({
  type: SET_NEW_ALL_QUESTIONS_ORDER,
  payload,
});

export const canDrag = () => ({
  type: CAN_DRAG,
});

export const switchColumnOrder = (payload) => ({
  type: SET_NEW_COLUMNS_ORDER,
  payload
});
