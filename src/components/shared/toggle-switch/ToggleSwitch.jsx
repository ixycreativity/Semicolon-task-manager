import React from "react";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled(Switch)(({ theme }) => ({
  "&": {
    color: "#3754db",
    width: "auto",
  },
  "& .MuiSwitch-thumb": {
    width: "20px",
    height: "20px",
    boxShadow: "none",
    marginTop: "5px",
    marginRight: "0px",
    marginLeft: "4px",
  },
  "& .MuiSwitch-track": {
    width: "42px",
    height: "24px",
    borderRadius: "24px",
    backgroundColor: "#3754db",
  },
  "& .css-1yjjitx-MuiSwitch-track": {
    backgroundColor: "#3754db",
    opacity: "0.2",
  },
  "& .css-x7ds8m-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":
    {
      opacity: "0.2",
    },
}));

const ToggleSwitch = () => {
  return <IOSSwitch />;
};

export default ToggleSwitch;
