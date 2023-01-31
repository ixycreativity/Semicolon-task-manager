import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import PageLayout from "../components/shared/page-layout/PageLayout";
import TaskViewer from "../components/shared/task-viewer/TaskViewer";
import { fetchTasksAction } from "../store/task/task.slice";
import { useDispatch, useSelector } from "react-redux";
import TabContent from "../components/tab-content/TabContent";
import VarModal from "../components/modals/VarModal";

import { react } from "@babel/types";

const Tasks = () => {
  const tasks = useSelector((state) => state.entities.tasks.data);
  const [filtered, setFiltered] = React.useState(tasks);
  const onTabChange = (value, isFiltering) => {
    if (isFiltering == true) {
      const filteredTasks = [];
      for (let i = 0; i < tasks.length; i++) {
        if (value === tasks[i].status) {
          filteredTasks.push(tasks[i]);
        }
      }
      setFiltered(filteredTasks);
    } else {
      setFiltered(tasks);
    }
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, [dispatch]);

  return (
    <PageLayout>
      <p>
        Search bar , taburi + taskviewer + right bar cu calder pick si numele
        tau si mail
      </p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 20px 20px 5px",
        }}
      >
        <Stack>
          <Typography
            sx={{ fontWeight: 600, fontSize: "28px", lineHeight: "34px" }}
          >
            Tasks
          </Typography>
          <Typography>Your tasks in your space.</Typography>
        </Stack>

        <VarModal variant="createTask" />
      </Box>

      <TabContent type={true} onTabChange={onTabChange} />
      <TaskViewer tasksData={filtered} />

      {/* la click pe task => redirect in TaskCardDetailsPage link task/1 etc  */}
      {/* + Create task modala de create #florin  si edit si delete */}
    </PageLayout>
  );
};

export default Tasks;
