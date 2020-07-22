import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TableBody from "@material-ui/core/TableBody";

const DroppableTableComponent = (
  onDragEnd: (result, provided) => void
) => props => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={"1"} direction="vertical">
        {provided => {
          return (
            <TableBody
              ref={provided.innerRef}
              {...provided.droppableProps}
              {...props}
            >
              {props.children}
              {provided.placeholder}
            </TableBody>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default DroppableTableComponent;
