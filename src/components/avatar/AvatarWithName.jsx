import React from "react";
import { Avatar } from "./Avatar";
import { Typography, Box } from "@mui/material";

const AvatarWithName = ({ userName, userRole }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "flex-start",
        alignItems: "center",
        maxWidth: "300px",
        marginLeft: "15px",
        marginBottom: "40px",
      }}
    >
      <Avatar variant="image" src="/avatars/girl.png" size="xs" />
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "-0.02em",
            color: "#3754DB", //TO BE MADE CONDITIONAL
          }}
        >
          {userName}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "22px",
            letterSpacing: "-0.02em",
            color: "#808080", //TO BE MADE CONDITIONAL
          }}
        >
          {userName}
        </Typography>
      </Box>
    </Box>
  );
};

export default AvatarWithName;
