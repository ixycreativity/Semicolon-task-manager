import Button from "../shared/button/Button";
import { BootstrapDialog } from "./Modal.styles";
import CustomDialogTitle from "./CustomDialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/app/app.slice";

const LogOutModal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleClose, open, variant } = props;

  const handleLogOut = () => {
    dispatch(handleClose);
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            height: "273px",
          },
        }}
      >
        <CustomDialogTitle onClose={handleClose}>
          You are about to LogOut
        </CustomDialogTitle>
        <DialogContent>
          <DialogContentText>
            You can always log on to your task manager and continue from where
            you left off.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{ width: "208px" }}
          >
            No, This was a Mistake
          </Button>
          <Button variant="logout" onClick={handleLogOut}>
            Yes, Log Me Out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogOutModal;
