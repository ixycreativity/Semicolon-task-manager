import React from "react";
import { Stack } from "@mui/material";
import TaskDetailsCard from "../components/shared/task-details-card/TaskDetailsCard";

export const TaskDetailsCardPage = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="flex-start"
      padding="40px"
      sx={{ backgroundColor: "#f5f7fe" }}
    >
      <TaskDetailsCard
        status="Unasigned"
        currentUser="1"
        assignedTo="2"
        createdBy="1"
        //userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="Unasigned"
        currentUser="1"
        assignedTo="2"
        createdBy="3"
        //userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="Pending"
        currentUser="1"
        assignedTo="1"
        createdBy="3"
        //userRole="developer"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="Pending"
        currentUser="1"
        assignedTo="2"
        createdBy="1"
        // userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="Pending"
        currentUser="1"
        assignedTo="2"
        createdBy="3"
        //userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="In Progress"
        currentUser="1"
        assignedTo="1"
        createdBy="3"
        //userRole="developer"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Progress"
        currentUser="1"
        assignedTo="2"
        createdBy="1"
        //userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Progress"
        currentUser="1"
        assignedTo="2"
        createdBy="3"
        //userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="In Review"
        currentUser="1"
        assignedTo="1"
        createdBy="3"
        //userRole="developer"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Review"
        currentUser="1"
        assignedTo="2"
        createdBy="1"
        // userRole="assigner"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
      <TaskDetailsCard
        status="In Review"
        currentUser="1"
        assignedTo="2"
        createdBy="3"
        //userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />

      <TaskDetailsCard
        status="Completed"
        currentUser="1"
        assignedTo="2"
        createdBy="3"
        //userRole="other"
        title="Create a design system form Enum Workspce"
        description="Lorem ipsum sit dolor met lorem ipsum"
        createdAt="22/03/22"
        dueDate="30/01/23"
      />
    </Stack>
  );
};
