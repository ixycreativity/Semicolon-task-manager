import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import SvgTrashBin from "../../assets/icons/TrashBin";
import SvgEditPen from "../../assets/icons/EditPen";
import Button from "../shared/button/Button";
import CreateTaskModal from "./CreateTaskModal";
import EditTaskModal from "./EditTaskModal";
import DeleteTaskModal from "./DeleteTaskModal";
import LogOutModal from "./LogOutModal";
import AddMatesModal from "./AddMatesModal";
import EditProfileModal from "./EditProfileModal";
import UploadProfilePictureModal from "./UploadProfilePictureModal";
import { modalTypes } from "../../store/app/constants";
import { openModal, closeModal } from "../../store/app/app.slice";
import { useDispatch, useSelector } from "react-redux";

const VarModal = (props) => {
  const { variant, data, currentTask } = props;

  const dispatch = useDispatch();
  const open = useSelector((state) => state.app.ui.modal.isOpen);
  const modalType = useSelector((state) => state.app.ui.modal.modalType);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const getModalContent = () => {
    switch (modalType) {
      case modalTypes.createTask:
        return (
          <CreateTaskModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.editTask:
        return (
          <EditTaskModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
            currentTask={currentTask}
          />
        );
      case modalTypes.deleteTask:
        return (
          <DeleteTaskModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
            currentTask={currentTask}
          />
        );
      case modalTypes.logOut:
        return (
          <LogOutModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.editProfile:
        return (
          <EditProfileModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
            data={data}
          />
        );
      case modalTypes.addTeam:
        return (
          <AddMatesModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      case modalTypes.uploadPicture:
        return (
          <UploadProfilePictureModal
            handleClose={handleClose}
            open={open}
            variant={modalType}
          />
        );
      default:
        return null;
    }
  };

  const getModalButtonType = () => {
    switch (modalTypes[variant]) {
      case modalTypes.editTask:
        return (
          <Button
            sx={{ width: "80px", background: "#FFF5F5" }}
            onClick={() => dispatch(openModal(modalTypes[variant]))}
          >
            <SvgEditPen />
          </Button>
        );
      case modalTypes.deleteTask:
        return (
          <Button
            sx={{ width: "80px", background: "#FFF5F5" }}
            onClick={() => dispatch(openModal(modalTypes[variant]))}
          >
            <SvgTrashBin />
          </Button>
        );
      case modalTypes.logOut:
        return (
          <Button
            variant="contained"
            sx={{ width: "125px", background: "#B80020" }}
            onClick={() => dispatch(openModal(modalTypes[variant]))}
          >
            {modalTypes[variant]}
          </Button>
        );
      default:
        return (
          <Button
            variant="contained"
            onClick={() => dispatch(openModal(modalTypes[variant]))}
          >
            {modalTypes[variant]}
          </Button>
        );
    }
  };

  return (
    <div>
      {getModalButtonType()}
      {getModalContent()}
    </div>
  );
};

export default VarModal;

VarModal.propTypes = {
  variant: PropTypes.oneOf(Object.keys(modalTypes)).isRequired,
};
