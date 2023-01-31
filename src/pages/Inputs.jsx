import { Stack, Typography } from "@mui/material";
import { PoseaTasksList } from "../components/tasks-list/PoseaTasksList";
import SignupForm from "../components/authentication/SignupForm";
import EditProfileForm from "../components/authentication/EditProfileForm";
import SigninForm from "../components/authentication/SigninForm";
import ForgotPasswordForm from "../components/authentication/ForgotPasswordForm";
import RecoverPasswordForm from "../components/authentication/RecoverPasswordForm";
export const Inputs = () => {
  return (
    <Stack spacing={3} padding="30px">
      <PoseaTasksList />
      <Stack direction="row" spacing={5}>
        <Stack sx={{ width: "384px" }}>
          <Typography variant="h6">SignUp Form</Typography>
          <SignupForm buttonText="Create Account" />
        </Stack>
        <Stack sx={{ width: "384px" }}>
          <Typography variant="h6">Edit Profile Form</Typography>
          <EditProfileForm
            buttonText="Save"
            data={{ fullName: "Florin Posea", email: "fp@fp.com" }}
          />
        </Stack>
        <Stack sx={{ width: "384px" }}>
          <Typography variant="h6">SignIn Form</Typography>
          <SigninForm />
        </Stack>
        <Stack sx={{ width: "384px" }}>
          <Typography variant="h6">RecoverPassword Form</Typography>
          <RecoverPasswordForm />
        </Stack>
        <Stack sx={{ width: "384px" }}>
          <Typography variant="h6">ForgotPassword Form</Typography>
          <ForgotPasswordForm />
        </Stack>
      </Stack>
    </Stack>
  );
};
