import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

function QuestionItem({ question, number }) {
  const { text, id } = question;

  const isDraggable = useSelector(store => store.isDraggable);

  return (
    <Draggable draggableId={id} index={number} isDragDisabled={!isDraggable} >
      {(provided, snapshot) => (
        <div 
          className={classnames('question-item DRAGGABLE', snapshot.isDragging && 'question-item-dragging')}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <span className="question-slider" {...provided.dragHandleProps} >::</span>
          <div className="question-number">{number + 1}</div>
          <div className="question-text">{text}</div>
        </div>
      )}
    </Draggable>
  );
}

export default QuestionItem;
