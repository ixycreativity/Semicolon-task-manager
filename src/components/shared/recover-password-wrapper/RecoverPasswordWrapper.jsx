import React from "react";
import { Box } from "@mui/material";
import recoverBackground from "../../../assets/images/recoverPasswordBg.png";

const RecoverPasswordWrapper = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: `#fff url(${recoverBackground}) no-repeat bottom center`,
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </Box>
  );
};

export default RecoverPasswordWrapper;
