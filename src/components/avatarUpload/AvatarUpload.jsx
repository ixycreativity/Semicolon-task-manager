import { useRef } from "react";
import PropTypes from "prop-types";

/**
 * Imports Material UI components
 */
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

/**
 * Imports styled components
 */
import { Container, UploadIconContainer, Overlay } from "./AvatarUpload.styles";

/**
 * Displays the component
 */
export const AvatarUpload = (props) => {
  const { children, size, file, onUpload, onCancel } = props;

  /**
   * Initializes the ref for the hidden input
   */
  const inputRef = useRef();

  /**
   * Handles triggering the hidden input click
   */
  const handleClick = () => {
    inputRef.current.click();
  };

  /**
   * Handles clearing the input and triggering the parent clear function
   */
  const handleCancel = () => {
    inputRef.current.value = "";
    onCancel();
  };

  /**
   * Sends the file to the parent
   */
  const onInputChange = (event) => {
    const fileUploaded = event.target.files[0];

    onUpload(fileUploaded);
  };

  return (
    <Container>
      {children}
      <Overlay size={size}>
        <UploadIconContainer onClick={handleClick}>
          <CameraAltOutlinedIcon />
          <input
            type="file"
            ref={inputRef}
            onChange={onInputChange}
            style={{ display: "none " }}
          />
        </UploadIconContainer>
      </Overlay>
      {file && (
        <IconButton onClick={handleCancel} className="AvatarUpload-cancelBtn">
          <ClearIcon />
        </IconButton>
      )}
    </Container>
  );
};

AvatarUpload.propTypes = {
  file: PropTypes.any,
  onUpload: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
};
