import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  borderRadius: 12,
  ".MuiBadge-standard": {
    padding: "5px 12px",
    whiteSpace: "nowrap",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "14px",
    height: "23px",
  },
}));

export default StyledBadge;
