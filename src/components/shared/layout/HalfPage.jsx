import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HalfPage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "688px",
  height: "984px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "32px",
  padding: "24px 100px 100px 100px",
}));
