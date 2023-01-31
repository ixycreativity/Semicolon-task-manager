import React from "react";
import { IconButton } from "@mui/material";
import MessageBox from "../../../assets/icons/MessegeBox";
import VarModal from "../../modals/VarModal";

const renderTrashIcon = (icon, currentTask) => {
  if (icon) {
    return <VarModal variant="deleteTask" currentTask={currentTask} />;
  }
};

const renderEditIcon = (icon, currentTask) => {
  if (icon) {
    return <VarModal variant="editTask" currentTask={currentTask} />;
  }
};

const renderMessageIcon = (icon) => {
  if (icon) {
    return (
      <IconButton>
        <MessageBox />
      </IconButton>
    );
  }
};

const TaskActions = ({ trash, edit, message, currentTask }) => {
  return (
    <>
      {renderTrashIcon(trash, currentTask)}
      {renderEditIcon(edit, currentTask)}
      {renderMessageIcon(message)}
    </>
  );
};

export default TaskActions;
