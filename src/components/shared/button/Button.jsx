import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  textTransform: "capitalize",
  "&.MuiButton-sizeLarge": {
    padding: "19px 36px",
  },
  "&.MuiButton-sizeMedium": {
    padding: "15px 30px",
  },
  "&.MuiButton-sizeSmall": {
    padding: "11px 22px",
  },
  "&.MuiButton-link": {
    color: theme.palette.primary.main,
  },
  "&.Mui-disabled": {
    color: "#FFFFFF",
    backgroundColor: "#D7DDF8",
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  textTransform: "capitalize",
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

export default StyledButton;

export { ColorButton };
