import initialState from './state';

import {
  SET_NEW_QUESTIONS_ORDER,
  SET_NEW_ALL_QUESTIONS_ORDER,
  CAN_DRAG,
  SET_NEW_COLUMNS_ORDER,
} from './constants';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_QUESTIONS_ORDER:
      return {
        ...state,
        selectedQuestions: payload,
      };
    case SET_NEW_ALL_QUESTIONS_ORDER:
      return {
        ...state,
        allQuestions: payload,
      };
    case CAN_DRAG:
      return {
        ...state,
        canDrag: !state.isDraggable,
      };
    case SET_NEW_COLUMNS_ORDER:
      return {
        ...state,
        columns: payload,
      };
    default:
      return state;
  }
};
