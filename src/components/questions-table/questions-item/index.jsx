import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

function QuestionItem({ question, index }) {
  const { text, id } = question;

  const canDrag = useSelector(store => store.canDrag);

  return (
    <Draggable draggableId={id} index={index} isDragDisabled={!canDrag} >
      {(provided, snapshot) => (
        <div 
          className={classnames('question-item DRAGGABLE', snapshot.isDragging && 'question-item-dragging')}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <span className="question-slider" {...provided.dragHandleProps} >::</span>
          <div className="question-number">{index + 1}</div>
          <div className="question-text">{text}</div>
        </div>
      )}
    </Draggable>
  );
}

export default QuestionItem;
