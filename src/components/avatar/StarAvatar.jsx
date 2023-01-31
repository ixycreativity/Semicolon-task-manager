import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import CustomAvatar from "./CustomAvatar";
import VerifiedTwoToneIcon from "@mui/icons-material/VerifiedTwoTone";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    position: "absolute",
    backgroundColor: "#00C271",
    width: "35%",
    height: "35%",
    top: 7,
    right: 4,
    borderRadius: "50%",
    border: "2px solid #ffffff",
    borderAlign: "inside",
  },
}));

export default function BadgeAvatar(props) {
  const { src, variant, size } = props;
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        variant={variant}
      >
        <CustomAvatar src={src} size={size} />
        {/* <VerifiedTwoToneIcon /> */}
      </StyledBadge>
    </Stack>
  );
}
