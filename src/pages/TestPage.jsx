import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "../components/shared/button/Button";
import RecoverPassword from "../components/shared/recover-password/RecoverPassword";
import Badge from "../components/shared/badge/Badge";

import SideBar from "../components/shared/side-bar/SideBar";
import Chart from "../assets/icons/icon/filled/Chart";
import Chat from "../assets/icons/icon/filled/Chat";
import Notification from "../assets/icons/icon/filled/Notification";
import Overview from "../assets/icons/icon/filled/Overview";
import RecoverPasswordWrapper from "../components/shared/recover-password-wrapper/RecoverPasswordWrapper";
import Stack from "@mui/material/Stack";

import ForgotPassword from "../components/shared/forgot-password/ForgotPassword";
import Card from "../components/shared/card-component/Card-Component";
import CheckBox from "../components/shared/check-box/CheckBox";
import ToggleSwitch from "../components/shared/toggle-switch/ToggleSwitch";
import TaskDetailsCard from "../components/shared/task-details-card/TaskDetailsCard";

function Test() {
  const theme = useTheme();
  return (
    <div>
      <Container
        sx={{
          border: theme.palette.primary.main,
        }}
      >
        <Paper>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
        </Paper>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
        <Button sx={{ width: 190 }} size="large" variant="contained">
          Test
        </Button>
        <Button size="medium" variant="link">
          Test
        </Button>
        <Button disabled size="small" variant="contained">
          Test
        </Button>

        <Stack direction="column" spacing={5} alignItems="flex-start">
          <Badge variant="standard" badgeContent={3} color="primary"></Badge>
          <Badge variant="standard" badgeContent={3} color="secondary"></Badge>

          <Badge
            variant="standard"
            badgeContent={"Pending"}
            color="pending"
          ></Badge>

          <Badge
            variant="standard"
            badgeContent={"In Progress"}
            color="inProgress"
          ></Badge>

          <Badge
            variant="standard"
            badgeContent={"In Review"}
            color="inReview"
          ></Badge>

          <Badge
            variant="standard"
            badgeContent={"Unassigned"}
            color="unassigned"
          ></Badge>

          <Badge
            variant="standard"
            badgeContent={"Unassigned"}
            color="unassignedGrey"
          ></Badge>

          <Badge
            variant="standard"
            badgeContent={5}
            color="primaryLight"
          ></Badge>

          <Badge
            variant="standard"
            badgeContent={5}
            color="secondaryLight"
          ></Badge>
        </Stack>
        <br />
        <Card />
        <br />
        <SideBar />
        <Chart />
        <Chat />
        <Notification />
        <Overview />
        <Stack direction="column" spacing={1} alignItems="center">
          <CheckBox />
          <CheckBox disabled />
          <CheckBox disabled disabledChecked />
          <CheckBox indeterminate />
          <CheckBox indeterminate disabled />
          <ToggleSwitch />
        </Stack>
        <Stack
          direction="column"
          spacing={4}
          alignItems="flex-start"
          padding="40px"
          sx={{ backgroundColor: "#f5f7fe" }}
        >
          <TaskDetailsCard status="Unasigned" userRole="assigner" />
          <TaskDetailsCard status="Unasigned" userRole="other" />

          <TaskDetailsCard status="Pending" userRole="developer" />
          <TaskDetailsCard status="Pending" userRole="assigner" />
          <TaskDetailsCard status="Pending" userRole="other" />

          <TaskDetailsCard status="In Progress" userRole="developer" />
          <TaskDetailsCard status="In Progress" userRole="assigner" />
          <TaskDetailsCard status="In Progress" userRole="other" />

          <TaskDetailsCard status="In Review" userRole="developer" />
          <TaskDetailsCard status="In Review" userRole="assigner" />
          <TaskDetailsCard status="In Review" userRole="other" />

          <TaskDetailsCard status="Completed" />
        </Stack>
      </Container>
      <RecoverPasswordWrapper>
        <ForgotPassword />
      </RecoverPasswordWrapper>
      <RecoverPasswordWrapper>
        <RecoverPassword />
      </RecoverPasswordWrapper>
    </div>
  );
}

export default Test;
