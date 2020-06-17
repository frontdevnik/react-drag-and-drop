import React from 'react';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import { QUESTION_DROP_ZONE } from '../../../constants';

import QuestionItem from '../questions-item';

function TableBody() {
  const questions = useSelector((state) => state.questions);

  return (
    <Droppable droppableId={QUESTION_DROP_ZONE} >
      {(provided) => (
        <div
          className="questions-body DROPPABLE"
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
