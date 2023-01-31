import { Stack, Typography } from "@mui/material";
import RecoverPasswordForm from "../../authentication/RecoverPasswordForm";

const RecoverPassword = () => {
  return (
    <Stack
      sx={{
        maxWidth: "350px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "29px",
          letterSpacing: "-0.02em",
        }}
        gutterBottom
      >
        Enter New Password
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#666666",
        }}
      >
        Your account has been recovered. Enter your new password to gain full
        control of your account.
      </Typography>

      <RecoverPasswordForm />
    </Stack>
  );
};

export default RecoverPassword;
