import { Stack } from "@mui/material";
import TabContent from "../components/tab-content/TabContent";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

const Tabs = () => {
  return (
    <Stack spacing={3} padding="30px">
      <PoseaTasksList />
      <TabContent type={false} />
      <TabContent type={true} />
    </Stack>
  );
};

export default Tabs;
