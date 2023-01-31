import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: theme.spacing(3),
    width: "500px",
    height: "645px",
    borderRadius: "20px",
  },
  "& .MuiDialogActions-root": {
    justifyContent: "flex-start",
  },
}));
