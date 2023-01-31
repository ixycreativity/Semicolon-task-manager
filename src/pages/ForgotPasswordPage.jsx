import { Stack,Box } from "@mui/material";
import RecoverPasswordWrapper from "../components/shared/recover-password-wrapper/RecoverPasswordWrapper";
import ForgotPassword from "../components/shared/forgot-password/ForgotPassword";

export const ForgotPasswordPage = () => {
  return (
  
        <RecoverPasswordWrapper>
          <ForgotPassword />
        </RecoverPasswordWrapper>
    
  );
};
