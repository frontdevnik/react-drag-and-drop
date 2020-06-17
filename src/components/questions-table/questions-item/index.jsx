import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function questionItem({ question, number }) {
  const { text, id } = question;

  return (
    <Draggable draggableId={id} index={number}>
      {(provided) => (
        <div 
          className="question-item DRAGGABLE"
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

export default questionItem;
