import Button from "../shared/button/Button";
import CustomDialogTitle from "./CustomDialogTitle";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { AddMatesTabs } from "../add-mates-dialog/AddMatesTabs";

const AddMatesModal = (props) => {
  const { handleClose, open, variant } = props;

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            height: "645px",
          },
        }}
      >
        <CustomDialogTitle onClose={handleClose}>
          Add Team Mates to <br /> Workspace.
        </CustomDialogTitle>
        <DialogContent>
          <AddMatesTabs />
          <br />
          <br />
          <br />
          <Typography gutterBottom>
            Preview of Users to Add shows up here component.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Add Team
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddMatesModal;
