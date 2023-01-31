import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";

const CustomDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle
      sx={{ m: 0, p: 2, fontWeight: 600, fontSize: "28px", lineHeight: "34px" }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default CustomDialogTitle;
