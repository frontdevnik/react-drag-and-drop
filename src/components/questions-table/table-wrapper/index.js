import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import TableHeader from '../table-header';
import TableMarkDown from '../table-markdown';
import TableBody from '../table-body';

function TableWrapper({ title, index }) {
  return (
    <Draggable draggableId={title + index} index={index}>
      {(provided) => (
        <div
          className="table"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <TableHeader title={title} {...provided.dragHandleProps} />
          <TableMarkDown />
          <TableBody id={title} />
        </div>
      )}
    </Draggable>
  );
}

export default TableWrapper;
