import { useState } from "react";
import Button from "../shared/button/Button";
import CustomDialogTitle from "./CustomDialogTitle";
import { Dialog, DialogContent, DialogActions } from "@mui/material";

const modalInputsStyle = {
  "& .MuiInputLabel-root": {
    marginTop: "10px",
  },
  "& .MuiOutlinedInput-root": {
    margin: "8px 0px 2px",
  },
  "& .MuiDialogTitle-root": {
    padding: "14px 16px 8px",
  },
  "& .MuiDialog-paper": {
    width: "460px",
  },
  "& .MuiButton-root": {
    marginTop: "24px",
  },
};

const UploadProfilePictureModal = (props) => {
  const { handleClose, open, variant } = props;
  const [isPictureSelected, setIsPictureSelected] = useState(false);

  return (
    <div>
      <Dialog onClose={handleClose} open={open} sx={modalInputsStyle}>
        <CustomDialogTitle onClose={handleClose}>
          Upload your Profile Picture
        </CustomDialogTitle>
        <DialogContent>Tap Icon to Select Picture</DialogContent>
        <DialogActions>
          {isPictureSelected ? (
            <Button fullWidth variant="contained" type="submit">
              {variant}
            </Button>
          ) : (
            <Button disabled fullWidth variant="contained" type="submit">
              {variant}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UploadProfilePictureModal;
