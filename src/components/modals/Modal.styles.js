import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogActions-root": {
    // justifyContent: "flex-start",
  },
}));

export const BootstrapDialogTitle = styled(DialogTitle)(({ theme }) => ({
  margin: 0,
  padding: "2px",
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "34px",
}));
