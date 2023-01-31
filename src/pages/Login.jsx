import { Stack, Box } from "@mui/system";
import { Media } from "../components/authentication/Media";
import { LoginForm } from "../components/authentication/LoginForm";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";

const Login = () => {
  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "20px",
    }}>
      <Stack
        spacing={3}
        direction="row"
        sx={{
          width: "1440px",
          height: "1024px",
          padding: "20px",
        }}
      >
        <LoginForm align="left" hasLogin={false} />
        <Media align="right" hasCreate={true} />
      </Stack>
    </Box>
  );
};

export default Login