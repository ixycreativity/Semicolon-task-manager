import { Stack } from "@mui/material";
import RecoverPasswordWrapper from "../components/shared/recover-password-wrapper/RecoverPasswordWrapper";
import RecoverPassword from "../components/shared/recover-password/RecoverPassword";

export const RecoverPasswordPage = () => {
  return (
    <Stack spacing={3} padding="30px">
      <Stack
        sx={{
          border: "1px solid",
        }}
      >
        <RecoverPasswordWrapper>
          <RecoverPassword />
        </RecoverPasswordWrapper>
      </Stack>
    </Stack>
  );
};
