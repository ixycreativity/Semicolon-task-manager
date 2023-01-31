import { Stack, Typography } from "@mui/material";
import ForgotPasswordForm from "../../authentication/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Stack
      sx={{
        maxWidth: "384px",
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
        Forgot Password?
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          lineHeight: "14px",
          color: "#6E7391",
          width: "70%",
          minHeight: "48px",
        }}
      >
        We are sorry to hear that happened. Don't be sad, we can help you get
        back in productivity in no time.
      </Typography>

      <ForgotPasswordForm />
    </Stack>
  );
};

export default ForgotPassword;
