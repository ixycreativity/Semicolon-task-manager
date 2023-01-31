import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  margin: 0,
  padding: "32px 20px",
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "34px",
}));

export default StyledDialogTitle;
