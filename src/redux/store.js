import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

import { SET_NEW_QUESTIONS_ORDER } from './constants';

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
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEW_QUESTIONS_ORDER:
      return {
        ...state,
        questions: payload
      };
    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
