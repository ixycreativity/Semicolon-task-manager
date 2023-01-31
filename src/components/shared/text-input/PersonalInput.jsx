import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const PersonalInput = styled(TextField)(({ theme }) => ({
  // borderRadius: "30px",
  height: "50px",
  "&.MuiTextField-root": {
    borderRadius: "30px",
    color: "red",
  },
  // "&.MuiButton-sizeMedium": {
  //   padding: "15px 30px",
  // },
  // "&.MuiButton-sizeSmall": {
  //   padding: "11px 22px",
  // },
  // "&.MuiButton-link": {
  //   color: theme.palette.primary.main,
  // },
  // "&.Mui-disabled": {
  //   color: "#FFFFFF",
  //   backgroundColor: "#D7DDF8",
  // },
}));

export default PersonalInput;
