import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import avatarPlaceholder from "../../../assets/images/avatar.png";
import addAvatar from "../../../assets/images/add-avatar.png";
import activeBackground from "../../../assets/images/selected-list-item.png";
import SvgOverview from "../../../assets/icons/icon/stroke/Overview";
import SvgTasks from "../../../assets/icons/icon/stroke/Tasks";
import SvgSettings from "../../../assets/icons/icon/stroke/Settings";
import SvgOverviewFilled from "../../../assets/icons/icon/filled/Overview";
import SvgTasksFilled from "../../../assets/icons/icon/filled/Tasks";
import SvgSettingsFilled from "../../../assets/icons/icon/filled/Settings";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tooggleSidebar } from "../../../store/app/app.slice";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 500,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `80px`,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .sidebar-list-item": {
    width: "100%",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
  "& .sidebar-list-item.active": {
    background: `#fff url(${activeBackground}) no-repeat center left`,
  },
  "& .sidebar-list-item-icon": {
    minWidth: "24px",
  },
  "& .sidebar-list-item-text": {
    color: "#666666",
    cursor: "pointer",
  },
  "& .active .sidebar-list-item-text": {
    fontWeight: 700,
    color: "#3754db",
  },
  "& .sidebar-project-avatar": {
    margin: "0px 0px 15px 0px",
    cursor: "pointer",
  },
  "& .sidebar-selected-project-avatar": {
    border: "1px solid #fbbe37",
    borderRadius: "10px",
    padding: "6px 6px 0px 6px",
  },
  "& .sidebar-add-project": {
    width: "36px",
    height: "36px",
    cursor: "pointer",
  },
}));

const SideBar = () => {
  // const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.app.ui.sidebar.isOpen);

  const handleDrawerToggle = () => {
    // setOpen((open) => !open);
    dispatch(tooggleSidebar(isOpen));
  };

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={isOpen}
        PaperProps={{ style: { border: "none" } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100vh",
            flexWrap: "wrap",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              minHeight: "100vh",
              backgroundColor: "#3754db",
              width: "79px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "15px 0 0 0",
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                marginRight: 0,
                color: "#ffffff",
                backgroundColor: "#3754db",
                marginBottom: "40px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box className="sidebar-project-avatar sidebar-selected-project-avatar">
              <img
                src={avatarPlaceholder}
                alt="avatarPlaceholder"
                sx={{
                  width: "38px",
                  height: "38px",
                }}
              />
            </Box>
            <Box className="sidebar-project-avatar">
              <img
                src={avatarPlaceholder}
                alt="avatarPlaceholder"
                sx={{
                  width: "36px",
                  height: "36px",
                }}
              />
            </Box>
            <Box className="sidebar-project-avatar">
              <img
                src={avatarPlaceholder}
                alt="avatarPlaceholder"
                sx={{
                  width: "36px",
                  height: "36px",
                }}
              />
            </Box>
            <Box>
              <img
                src={addAvatar}
                alt="add more"
                className="sidebar-add-project"
              />
            </Box>
          </Box>
          <Box
            sx={{
              height: "100%",
              backgroundColor: "#fff",
              width: "2px",
              paddingTop: "90px",
            }}
          >
            <Box
              sx={{
                padding: "0px 0px 35px 20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#101c56",
                }}
              >
                My Space
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666666",
                }}
              >
                Workplace Title
              </Typography>
            </Box>
            <List
              sx={{
                listStyleType: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <ListItem
                className={
                  splitLocation[1] === "dashboard"
                    ? "sidebar-list-item active"
                    : "sidebar-list-item"
                }
              >
                <ListItemIcon className="sidebar-list-item-icon">
                  {splitLocation[1] === "dashboard" ? (
                    <SvgOverviewFilled />
                  ) : (
                    <SvgOverview />
                  )}
                </ListItemIcon>
                <Link
                  underline="hover"
                  href="../dashboard"
                  className="sidebar-list-item-text"
                >
                  Overview
                </Link>
              </ListItem>
              <ListItem
                className={
                  splitLocation[1] === "tasks"
                    ? "sidebar-list-item active"
                    : "sidebar-list-item"
                }
              >
                <ListItemIcon className="sidebar-list-item-icon">
                  {splitLocation[1] === "tasks" ? (
                    <SvgTasksFilled />
                  ) : (
                    <SvgTasks />
                  )}
                </ListItemIcon>
                <Link
                  underline="hover"
                  href="../tasks"
                  className="sidebar-list-item-text"
                >
                  Tasks
                </Link>
              </ListItem>
              <ListItem
                className={
                  splitLocation[1] === "settings"
                    ? "sidebar-list-item active"
                    : "sidebar-list-item"
                }
              >
                <ListItemIcon className="sidebar-list-item-icon">
                  {splitLocation[1] === "settings" ? (
                    <SvgSettingsFilled />
                  ) : (
                    <SvgSettings />
                  )}
                </ListItemIcon>
                <Link
                  underline="hover"
                  href="../settings"
                  className="sidebar-list-item-text"
                >
                  Settings
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
