import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SideBar from "../side-bar/SideBar";
import SidebarRight from "../side-bar-right/SidebarRight";
import { useSelector, useDispatch } from "react-redux";
import { getLoggedUserAction } from "../../../store/app/app.slice";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    display: "grid",
    gridTemplateColumns: "auto 280px",
    gap: "20px",
    width: "100%",
    backgroundColor: "#F5F7FE",
    minHeight: "100vh",
  },
  "& .page-main-container": {
    display: "flex",
    gap: "20px",
  },
  "& .page-main-col": {
    width: "100%",
    "@media (min-width: 2561px)": {
      marginRight: "210px",
    },
  },
}));

const PageLayout = (props) => {
  const data = useSelector(
    (state) => state.app.auth.loggedUser.userInfo || null
  );
  // console.log(data);

  return (
    <StyledBox>
      <Box className="page-main-container">
        <SideBar />

        <Box className="page-main-col">
          <Box>Search bar</Box>
          {props.children}
          {/* <AccountSettingsWrapper /> */}
        </Box>
      </Box>
      <SidebarRight userInfo={data} />
    </StyledBox>
  );
};

export default PageLayout;
