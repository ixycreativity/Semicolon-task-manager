import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarReact from "../calendar-react/CalendarReact";
import { Avatar } from "../../avatar/Avatar";
import Button from "../button/Button";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "258px",
  height: "984px",
  backgroundColor: "#FFFFFF",
  borderRadius: "24px",
  margin: "20px 20px 20px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "96px",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginBottom: "96px !important",
}));

const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "-0.02em",
  color: "#101C56",
  marginTop: "24px",
}));

const MailTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "17px",
  letterSpacing: "-0.02em",
  color: "#666666",
  marginTop: "4px",
}));

const MyProfileButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "66px",
  color: "#FFFFFF",
  fontWeight: "400",
  fontSize: "14px",
  padding: "11px 74px",
  width: "108px",
  height: "39px",
  whiteSpace: "nowrap",
}));

const SidebarRight = (props) => {
  const name = props.userInfo?.fullName.split(" ");
  return (
    <Box>
      <StyledBox>
        {/* <StyledAvatar
          variant="initials"
          firstName={name[0]}
          lastName={name[1]}
        /> */}

        <NameTypography>{props.userInfo?.fullName}</NameTypography>
        <MailTypography>{props.userInfo?.email}</MailTypography>
        <MyProfileButton size="medium" variant="contained">
          My Profile
        </MyProfileButton>
        <CalendarReact></CalendarReact>
      </StyledBox>
    </Box>
  );
};

export default SidebarRight;
