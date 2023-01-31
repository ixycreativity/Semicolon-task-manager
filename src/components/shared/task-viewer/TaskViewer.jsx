import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TaskCard from "../task-card/TaskCard";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";

const renderTasks = (data) => {
  if (data.length > 0) {
    let displayedItems = data.map((item) => (
      <TaskCard
        key={item.id}
        id={item.id}
        status={item.status}
        title={item.title}
      />
    ));
    return displayedItems;
  } else {
    return <EmptyListMessage />;
  }
};

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 270px)",
    marginTop: "30px",
    gridTemplateRows: "repeat(auto-fill, 170px)",
    width: "100%",
    backgroundColor: "#F5F7FE",
    minHeight: "100vh",
    gap: "auto",
    rowGap: "20px",
    position: "relative",
  },
}));

const TaskViewer = ({ tasksData }) => {
  return <StyledBox>{renderTasks(tasksData)}</StyledBox>;
};

export default TaskViewer;
