import { styled } from "@mui/material/styles";
import { Tab } from "@mui/material";

export const AntTab = styled(Tab)((props) => {
  const { theme } = props;
  return {
    textTransform: "none",
    minWidth: 100,
    maxWidth: 200,
    justifyContent: "space-between",
    marginRight: "40px",
    padding: "9px 16px 9px 12px",
    fontSize: "16px",
    fontWeight: theme.typography.fontWeightBold,
    color: "#808080",
    "&:hover": {
      color: "#1890ff",
      opacity: 1,
    },
    "& .MuiBadge-colorPrimary": {
      backgroundColor: "red",
    },
    "&.Mui-selected .MuiBadge-colorPrimary": {
      backgroundColor: "green",
    },
    "& .MuiTab-iconWrapper": {
      marginLeft: "15px"
  }
  };
});
