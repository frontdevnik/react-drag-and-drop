import { v4 as uuid } from 'uuid';

export default {
  allQuestions: [
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
  selectedQuestions: [],
  canDrag: true,
  columns: ['Questions', 'All Questions'],
};
