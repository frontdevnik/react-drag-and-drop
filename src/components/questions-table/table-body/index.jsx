import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { setNewQuestionsOrder } from '../../../redux/actions';

import QuestionsBody from '../questions-body';

function TableBody({id}) {
  return (
      <div className="table-body">
        <QuestionsBody id={id}/>
      </div>
  );
}

export default TableBody;
