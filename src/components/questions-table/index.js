import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import TableWrapper from './table-wrapper';

import {
  switchColumnOrder,
  setNewQuestionsOrder,
  setNewAllQuestionsOrder,
} from '../../redux/actions';
import { QUESTION_COLUMN_DROP_ZONE, QUESTION_COLUMN } from '../../constants';

function Table() {
  const dispatch = useDispatch();
  const { columns, allQuestions, selectedQuestions } = useSelector(
    (store) => store
  );

  const onDragEnd = (status) => {
    const { source, destination, type } = status;
    console.log(status);

    // Проверка на перемещение ----------
    if (!destination) {
      return;
    }

    if (
      source.index === destination.index &&
      source.id === destination.id &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    // Проверка на перемещение ----------

    // Перемещение колон
    if (type === QUESTION_COLUMN) {
      dispatch(switchColumnOrder(columns.reverse()));
      return;
    }

    // Перемещение айтемов
    if (source.droppableId === destination.droppableId) {
      const questions =
        source.droppableId === 'Questions' ? selectedQuestions : allQuestions;

      const movedQuestion = questions.splice([source.index], 1);
      questions.splice(destination.index, 0, movedQuestion[0]);
      return;
    }

    if (source.droppableId === 'Questions') {
      const movedQuestion = selectedQuestions.splice([source.index], 1);

      allQuestions.splice(destination.index, 0, movedQuestion[0]);
      dispatch(setNewAllQuestionsOrder(allQuestions));
    } else {
      const movedQuestion = allQuestions.splice([source.index], 1);

      selectedQuestions.splice(destination.index, 0, movedQuestion[0]);
      dispatch(setNewQuestionsOrder(selectedQuestions));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId={QUESTION_COLUMN_DROP_ZONE}
        type={QUESTION_COLUMN}
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <section
            className={classnames(
              'table-wrapper CONTEXT',
              snapshot.isDraggingOver && 'table-wrapper-over'
            )}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {columns.map((title, i) => (
              <TableWrapper key={i} title={title} index={i} />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Table;
