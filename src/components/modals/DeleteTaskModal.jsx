import Button from "../shared/button/Button";
import { BootstrapDialog } from "./Modal.styles";
import CustomDialogTitle from "./CustomDialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTaskAction } from "../../store/task/task.slice";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const DeleteTaskModal = (props) => {
  const { handleClose, open, currentTask, variant } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usertoken = useSelector(
    (state) => state.app.auth.loggedUser.accessToken
  );
  console.log(usertoken);

  const handleDeleteTask = async () => {
    // alert(currentTask.id);
    try {
      let response = await axios.delete(
        `${API_BASE_URL}/tasks/${currentTask.id}`,
        {
          headers: {
            Authorization: `Bearer ${usertoken.accessToken}`,
          },
        }
      );
      console.log(response.data);
      deleteTaskAction(response.data);

      // close modal and go to Tasks Page;
      dispatch(handleClose);
      navigate("/tasks");
    } catch (err) {
      console.log(err);
    }
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
        <CustomDialogTitle onClose={handleClose}>Delete Task</CustomDialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Are you sure you delete ${currentTask?.title}? This task status is
            ${currentTask?.status}.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClose}
            sx={{ width: "120px" }}
          >
            No
          </Button>
          <Button
            variant="delete"
            onClick={handleDeleteTask}
            sx={{ width: "120px" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteTaskModal;
