import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

import TableWrapper from './table-wrapper';

import {
  setNewColumnsOrder,
  setNewQuestionsOrder,
  setNewQuestions,
} from '../../redux/actions';
import {
  QUESTION_BLOCK_DROP_ZONE,
  QUESTION_DROP_ZONE,
  QUESTION_SECOND_DROP_ZONE,
} from '../../constants';

function Table() {
  const columnsId = useSelector((store) => store.columnsId);
  const questions = useSelector((store) => store.questions);
  const secondQuestion = useSelector((store) => store.secondQuestion);
  const dispatch = useDispatch();

  const onDragEnd = (status) => {
    const { source, destination, type } = status;
    console.log(status);

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

    if (source.droppableId === destination.droppableId) {
      const movedQuestion = questions.splice([source.index], 1);
      questions.splice(destination.index, 0, movedQuestion[0]);

      dispatch(
        type === QUESTION_BLOCK_DROP_ZONE
          ? setNewColumnsOrder()
          : setNewQuestionsOrder(questions)
      );
      return;
    }

    if (source.droppableId === QUESTION_DROP_ZONE) {
      const movedQuestion = questions.splice([source.index], 1);
      secondQuestion.splice(destination.index, 0, movedQuestion[0]);
    } else if (source.droppableId === QUESTION_SECOND_DROP_ZONE) {
      const movedQuestion = secondQuestion.splice([source.index], 1);
      questions.splice(destination.index, 0, movedQuestion[0]);
    }

    dispatch(
      type === QUESTION_BLOCK_DROP_ZONE
        ? setNewColumnsOrder()
        : QUESTION_DROP_ZONE
        ? setNewQuestions(questions)
        : setNewQuestions(secondQuestion)
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId={QUESTION_BLOCK_DROP_ZONE}
        type={QUESTION_BLOCK_DROP_ZONE}
        direction="horizontal"
      >
        {(provided) => (
          <section
            className="table-wrapper CONTEXT"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {columnsId.map((id, i) => (
              <TableWrapper key={id} id={id} index={i} />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Table;
