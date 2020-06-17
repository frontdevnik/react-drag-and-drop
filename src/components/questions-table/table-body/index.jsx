import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { setNewQuestionsOrder } from '../../../redux/actions';

import QuestionsBody from '../questions-body';
import { useSelector, useDispatch } from 'react-redux';

function TableBody() {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  // Все события на которые реагирует контекст

  // const onBeforeCapture = () => {
  //   /*...*/
  // };

  // const onBeforeDragStart = () => {
  //   /*...*/
  // };

  // const onDragStart = () => {
  //   /*...*/
  // };

  // const onDragUpdate = () => {
  //   /*...*/
  // };

  const onDragEnd = (status) => {      // REQUIRED
    console.log(status);
    const { source, destination } = status;

    const movedQuestion = questions.splice([source.index], 1);
    questions.splice(destination.index, 0, movedQuestion[0]);
    
    dispatch(setNewQuestionsOrder(questions));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="table-body CONTEXT">
        <QuestionsBody />
      </div>
    </DragDropContext>
  );
}

export default TableBody;
