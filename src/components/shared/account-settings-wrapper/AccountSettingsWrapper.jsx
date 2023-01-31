import React from "react";
import { Box } from "@mui/material";
import SearchBar from "../searchBar";
import SvgNotification from "../../../assets/icons/icon/stroke/Notification";
import AccountSettingsCard from "./AccountSettingsCard";
import Button, { ColorButton } from "../button/Button";
import NotificationSettingsCard from "./NotificationSettingsCard";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/app/app.slice";
import { useNavigate } from "react-router-dom";
import VarModal from "../../modals/VarModal";

const AccountSettingsWrapper = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutFn = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <Box
      sx={{
        position: "relative",
        left: "1px",
        top: "0px",
        display: "flex",
        maxWidth: "879px",
        padding: "48px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px 74px",
          gap: "10px",

          position: "absolute",
          left: "600px",
          top: "100px",
        }}
      >
        <ColorButton
          onClick={logOutFn}
          sx={{ width: "125px", height: "54px" }}
          variant="contained"
        >
          Log Out
        </ColorButton>
        {/* <VarModal variant="logOut" /> */}
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "165px",
            height: "40px",
            top: "124px",
            left: "46px",
            justifyContent: "left",
          }}
        >
          {/* <SearchBar /> */}
          <h1>Settings</h1>

          <AccountSettingsCard userData={props.userData} />
          <NotificationSettingsCard />
        </Box>
      </Box>
    </Box>
  );
};

export default AccountSettingsWrapper;
