import { Stack, Box } from "@mui/material";
import { Media } from "../components/authentication/Media";
import { AuthForm } from "../components/authentication/AuthForm";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

export const CreateAccount = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Stack
        spacing={3}
        direction="row"
        sx={{
          width: "1440px",
          height: "1024px",
          padding: "20px",
        }}
      >
        <Media align="left" hasCreate={false} />
        <AuthForm align="left" hasLogin={true} />
      </Stack>
    </Box>
  );
};
