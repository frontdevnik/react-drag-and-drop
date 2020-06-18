import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import { QUESTION_DROP_ZONE, QUESTION_SECOND_DROP_ZONE } from '../../../constants';

import QuestionItem from '../questions-item';

function TableBody({id}) {
  let questions = useSelector((state) => state.questions);
  let secondQuestions = useSelector((state) => state.secondQuestion);
  let type = QUESTION_DROP_ZONE;

  questions = id === 'column-1' ? questions : secondQuestions;
  type = id === 'column-1' ? QUESTION_DROP_ZONE : QUESTION_SECOND_DROP_ZONE;

  const selectColorWhenDrag = (snapshot) => {
    if (snapshot.isDraggingOver) {
      return 'question-body-over';
    }
    if (snapshot.draggingFromThisWith) {
      return 'question-body-out';
    }

    return '';
  };

  return (
    <Droppable droppableId={type}>
      {(provided, snapshot) => (
        <div
          className={classnames(
            'questions-body DROPPABLE',
            selectColorWhenDrag(snapshot)
          )}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {questions.map((question, i) => (
            <QuestionItem key={question.id} question={question} number={i} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TableBody;
