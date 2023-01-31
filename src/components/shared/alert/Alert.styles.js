import { Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../../theme";

export const StyledAlert = styled(Alert)(({ theme }) => ({
  "&.MuiAlert-root": {
    alignItems: "center",
    borderRadius: "12px",
    width: "350px",
    height: "81px",
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: "12px",
    lineHeight: "14px",
  },
  "&.MuiAlert-message": {
    marginLeft: "20px",
  },
  "&.MuiAlert-filledWarning": {
    color: "#fff",
  },
  "&.MuiAlert-filledSuccess": {
    color: "#fff",
  },
  "&.MuiAlert-outlinedError": {
    color: "#B80020",
  },
  "&.MuiAlert-outlinedWarning": {
    color: "#00C271",
  },
  "&.MuiAlert-outlinedInfo": {
    color: "#6684FF",
  },
  "&.MuiAlert-outlinedSuccess": {
    color: "#00C271",
  },
  "&.MuiAlert-icon": {
    marginLeft: "14px",
  },
  "&.MuiAlert-action": {
    marginBottom: "30px",
    marginRight: "2px",
  },
}));
