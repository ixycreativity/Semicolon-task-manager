import { Stack } from "@mui/material";
import VarModal from "../components/modals/VarModal";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";
import { useSelector } from "react-redux";

export const Modals = () => {
  const userData = useSelector((state) => state.app.auth.loggedUser.userInfo);
  console.log(userData);

  return (
    <Stack spacing={2} padding="30px">
      <PoseaTasksList />
      <Stack direction="row" spacing={2} sx={{ margin: 5 }}>
        <VarModal variant="createTask" />
        <VarModal variant="editTask" />
        <VarModal variant="deleteTask" />
        <VarModal variant="logOut" />
        <VarModal variant="editProfile" data={userData} />
        <VarModal variant="uploadPicture" />
        <VarModal variant="addTeam" />
      </Stack>
    </Stack>
  );
};
