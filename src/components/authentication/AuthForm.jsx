import { Stack, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { HalfPage } from "../shared/layout/HalfPage";
import Button from "../shared/button/Button";
import SignupForm from "./SignupForm";

export const AuthForm = (props) => {
  const { align, hasLogin } = props;
  return (
    <HalfPage sx={{ backgroundColor: "#fff", justifyContent: "flex-start" }}>
      <Stack
        direction="row"
        justifyContent="end"
        visibility={hasLogin ? "visible" : "hidden"}
      >
        <Button variant="login" href="/login">
          Log In
        </Button>
      </Stack>

      <Stack sx={{ width: "384px", paddingTop: "140px" }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "-0.02em",
            textAlign: align,
          }}
        >
          Create an Account
        </Typography>
        <Typography variant="subtitle">It's simple and Easy!!</Typography>
        <SignupForm buttonText="Create Account" />
      </Stack>
    </HalfPage>
  );
};

AuthForm.propTypes = {
  align: PropTypes.oneOf(["left", "right"]).isRequired,
  hasLogin: PropTypes.bool.isRequired,
};
