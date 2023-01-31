import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";

const StyledTab = styled(Tab)(({ theme }) => {
  return {
    textTransform: "none",
    marginRight: "20px",
    fontSize: "16px",
    fontWeight: theme.typography.fontWeightBold,
    padding: "12px 3px",
    alignItems: "start",
  };
});

export default StyledTab;
