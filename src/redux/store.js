import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

import { SET_NEW_QUESTIONS_ORDER, CAN_DRAG, SET_NEW_COLUMNS_ORDER, SET_NEW_QUESTIONS } from './constants';

const initialState = {
  questions: [
    {
      id: uuid(),
      text: 'Question №1',
    },
    {
      id: uuid(),
      text: 'Question №2',
    },
    {
      id: uuid(),
      text: 'Question №3',
    },
    {
      id: uuid(),
      text: 'Question №4',
    },
    {
      id: uuid(),
      text: 'Question №5',
    },
  ],
  secondQuestion: [],
  columnsId: ['column-1', 'column-2'],
  isDraggable: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_QUESTIONS_ORDER:
      return {
        ...state,
        questions: payload,
      };
    case CAN_DRAG:
      return {
        ...state,
        isDraggable: !state.isDraggable
      };
    case SET_NEW_COLUMNS_ORDER:
      return {
        ...state,
        columnsId: state.columnsId.reverse()
      };
    case SET_NEW_QUESTIONS:
      return {
        ...state,
        columnsId: state.columnsId.reverse()
      };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
