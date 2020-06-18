import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import { QUESTION_ITEM } from '../../../constants';

import QuestionItem from '../questions-item';

function TableBody({ id }) {
  const questions = useSelector((state) =>
    id === 'Questions' ? state.selectedQuestions : state.allQuestions
  );

  const selectColorWhenDrag = (snapshot) => {
    if (snapshot.isDraggingOver) {
      return 'question-body-over';
    }
    if (snapshot.draggingFromThisWith) {
      return 'question-body-out';
    }
  };

  return (
    <div className="table-body">
      <Droppable droppableId={id} type={QUESTION_ITEM}>
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
              <QuestionItem key={question.id} question={question} index={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TableBody;
