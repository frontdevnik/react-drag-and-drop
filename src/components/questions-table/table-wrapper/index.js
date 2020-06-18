import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import TableHeader from '../table-header';
import TableMarkDown from '../table-markdown';
import TableBody from '../table-body';
import TableFooter from '../table-footer';

function TableWrapper({index, id}) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="table"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <TableHeader {...provided.dragHandleProps} />
          <TableMarkDown />
          <TableBody id={id} />
          {id === 'column-2' && <TableFooter />}
        </div>
      )}
    </Draggable>
  );
}

export default TableWrapper;
