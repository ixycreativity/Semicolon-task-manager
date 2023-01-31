import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}));

export default StyledIconButton;
