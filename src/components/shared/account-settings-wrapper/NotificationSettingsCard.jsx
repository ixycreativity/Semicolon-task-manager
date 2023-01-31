import React from "react";
import { Box } from "@mui/material";
import ToggleSwitch from "../toggle-switch/ToggleSwitch";

const NotificationSettingsCard = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "783px",
        height: "243px",
        left: "0px",
        top: "40px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "165px",
          height: "24px",
          left: "0px",
          top: "569px",

          fontFamily: "Gelion",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "24px",
          letterSpacing: "-0.02em",

          color: "#101C56",
        }}
      >
        <p>Notification Settings</p>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "783px",
          height: "199px",
          left: "0px",
          top: "613px",

          background: "#FFFFFF",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            width: "735px",
            height: "56px",
            marginTop: "20px",
            marginLeft: "20px",

            background: "#FBFBFE",
            border: "0.2px solid #A6A5A5",
            borderRadius: "16px",

            /* Inside auto layout */

            flex: "none",
            order: "0",
            alignSelf: "stretch",
            flexGrow: "0",
          }}
        >
          <span>
            <strong>Allow Desktop Notification</strong>
          </span>
          <ToggleSwitch defaultChecked />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            width: "735px",
            height: "56px",
            marginTop: "20px",
            marginLeft: "20px",

            background: "#FBFBFE",
            border: "0.2px solid #A6A5A5",
            borderRadius: "16px",

            /* Inside auto layout */

            flex: "none",
            order: "0",
            alignSelf: "stretch",
            flexGrow: "0",
          }}
        >
          <span>
            <strong>Send Critical Notification to My Email</strong>
          </span>
          <ToggleSwitch />
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationSettingsCard;
