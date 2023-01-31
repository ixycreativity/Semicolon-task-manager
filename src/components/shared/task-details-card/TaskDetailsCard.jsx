import React from "react";
import { Typography, Box, CardActions, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "../badge/Badge";
import Button from "../button/Button";
import TaskActions from "../task-actions/TaskActions";
import AvatarWithName from "../../avatar/AvatarWithName";
import emptyCercle from "../../../assets/images/cercle-empty.png";
import fullCercle from "../../../assets/images/cercle-full.png";
import completedCheck from "../../../assets/images/completed.png";

const StyledCard = styled(Box)(({ theme }) => ({
  "&": {
    width: "94%",
    maxWidth: "780px",
    backgroundColor: "#fff",
    margin: "20px auto 20px 0px",
    borderRadius: "16px",
    padding: "32px 40px 32px 26px",
    display: "grid",
    gridTemplateColumns: "auto 120px",
  },
  "& .card-details-content-text": {
    color: "#808080",
    padding: "20px 20px 0px 0px",
  },
  "& .card-actions": {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start",
  },
  "& .dates-div": {
    height: "206px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRight: "0.6px solid #D5D5D5",
    width: "100px",
    position: "relative",
  },
  "& .empty-cercle": {
    position: "absolute",
    top: "0px",
    right: "-15px",
  },
  "& .full-cercle": {
    position: "absolute",
    bottom: "0px",
    right: "-15px",
  },
  "& .date-title": {
    color: "#808080",
    fontSize: "12px",
  },
}));

const selectBadgeColor = (status) => {
  switch (status) {
    case "Unasigned":
      return "unassigned";
    case "Pending":
      return "pending";
    case "In Progress":
      return "inProgress";
    case "In Review":
      return "inReview";
    case "Completed":
      return "completed";
    default:
      return "inProgress";
  }
};

const calculateUserRoles = (a, b, c, status) => {
  switch (status) {
    case "Unasigned":
      if (a.id === c.id) {
        return "assigner";
      } else {
        return "other";
      }
    case "Pending":
      if (a.id === b.id) {
        return "developer";
      } else {
        if (a.id === c.id) {
          return "assigner";
        } else return "other";
      }
    case "In Progress":
      if (a.id === c.id) {
        return "assigner";
      } else {
        if (a.id === b.id) {
          return "developer";
        } else return "other";
      }
    case "In Review":
      if (a.id === c.id) {
        return "assigner";
      } else {
        if (a.id === b.id) {
          return "developer";
        } else return "other";
      }
    case "Completed":
      return "other";
    default:
      return "other";
  }
};

const renderRoles = (status, currentUser, assignedTo, createdBy) => {
  const userRole = calculateUserRoles(
    currentUser,
    assignedTo,
    createdBy,
    status
  );
  if (status === "Pending" && userRole === "developer") {
    return (
      <Badge
        variant="standard"
        badgeContent="Assigned to you"
        color="inProgress"
        sx={{ marginLeft: "100px" }}
      ></Badge>
    );
  }
  if (status === "In Progress" && userRole === "developer") {
    return (
      <Badge
        variant="standard"
        badgeContent="Assigned to you"
        color="inProgress"
        sx={{ marginLeft: "100px" }}
      ></Badge>
    );
  }
  if (status === "In Review" && userRole === "developer") {
    return (
      <Badge
        variant="standard"
        badgeContent="Assigned to you"
        color="inProgress"
        sx={{ marginLeft: "100px" }}
      ></Badge>
    );
  }
  if (status === "Pending" && userRole === "assigner") {
    return (
      <Badge
        variant="standard"
        badgeContent="Assigned"
        color="inProgress"
        sx={{ marginLeft: "100px" }}
      ></Badge>
    );
  }
  if (status === "In Progress" && userRole === "assigner") {
    return (
      <Badge
        variant="standard"
        badgeContent="Assigned"
        color="inProgress"
        sx={{ marginLeft: "100px" }}
      ></Badge>
    );
  }
  if (status === "In Review" && userRole === "assigner") {
    return (
      <Typography
        variant="subtitle2"
        sx={{
          marginLeft: "50px",
          fontWeight: 500,
          fontSize: "12px",
          display: "inline-block",
          letterSpacing: "-0.02em",
        }}
      >
        - By you
      </Typography>
    );
  }
};

const renderSwitch = (
  currentTask,
  status,
  currentUser,
  assignedTo,
  createdBy
) => {
  const userRole = calculateUserRoles(
    currentUser,
    assignedTo,
    createdBy,
    status
  );
  switch (status) {
    case "Unasigned":
      if (userRole === "other") {
        return (
          <CardActions className="card-actions">
            <Button size="medium" variant="contained">
              Request Task
            </Button>
            <TaskActions trash edit currentTask={currentTask} />
          </CardActions>
        );
      }
      if (userRole === "assigner") {
        return (
          <CardActions className="card-actions">
            <Button size="medium" variant="contained">
              Assign this task
            </Button>
            <TaskActions trash edit message currentTask={currentTask} />
          </CardActions>
        );
      }
      break;
    case "Pending":
      if (userRole === "developer") {
        return (
          <>
            <AvatarWithName
              userName="Adeeko Emmanuel Blu"
              userRole="developer"
            />
            <CardActions className="card-actions">
              <Button size="medium" variant="contained">
                Work on it
              </Button>
              <TaskActions trash edit currentTask={currentTask} />
            </CardActions>
          </>
        );
      }
      if (userRole === "assigner") {
        return (
          <>
            <AvatarWithName userName="Adeeko Emmanuel" userRole="assigner" />
            <CardActions className="card-actions">
              <Button size="medium" variant="outlined">
                Re-assign task
              </Button>
              <TaskActions trash edit message currentTask={currentTask} />
            </CardActions>
          </>
        );
      }
      if (userRole === "other") {
        return (
          <CardActions className="card-actions">
            <Button size="medium" variant="contained">
              Work on it Now
            </Button>
            <TaskActions trash edit currentTask={currentTask} />
          </CardActions>
        );
      }
      break;
    case "In Progress":
      if (userRole === "developer") {
        return (
          <>
            <AvatarWithName
              userName="Adeeko Emmanuel Blu"
              userRole="developer"
            />
            <CardActions className="card-actions">
              <Button
                size="medium"
                variant="contained"
                sx={{ backgroundColor: "#8937DB" }}
              >
                Send for Review
              </Button>
              <TaskActions trash edit currentTask={currentTask} />
            </CardActions>
          </>
        );
      }
      if (userRole === "assigner") {
        return (
          <CardActions className="card-actions">
            <Button
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "#00C271" }}
            >
              Mark As Done
            </Button>
            <TaskActions trash edit currentTask={currentTask} />
          </CardActions>
        );
      }
      if (userRole === "other") {
        return (
          <CardActions className="card-actions">
            <Button
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "#8937DB" }}
            >
              Send for Review
            </Button>
            <TaskActions trash edit currentTask={currentTask} />
          </CardActions>
        );
      }
      break;
    case "In Review":
      if (userRole === "developer") {
        return (
          <>
            <AvatarWithName
              userName="Adeeko Emmanuel Blu"
              userRole="developer"
            />
            <CardActions className="card-actions">
              <Typography variant="subtitle2" sx={{ color: "#001E99" }}>
                The assigner of your task gets to tell if if it’s done or not.
                Kindly check back later.
              </Typography>
              <TaskActions trash edit currentTask={currentTask} />
            </CardActions>
          </>
        );
      }
      if (userRole === "assigner") {
        return (
          <>
            <AvatarWithName userName="Adeeko Emmanuel" userRole="assigner" />
            <CardActions className="card-actions">
              <Button
                size="medium"
                variant="contained"
                sx={{ backgroundColor: "#00C271" }}
              >
                Mark As Done
              </Button>
              <TaskActions trash edit message currentTask={currentTask} />
            </CardActions>
          </>
        );
      }
      if (userRole === "other") {
        return;
      }
      break;
    case "Completed":
      return (
        <CardActions className="card-actions">
          <img src={completedCheck} alt="Check" width="32px" height="32px" />
          <Typography
            variant="subtitle2"
            sx={{
              color: "#00A35F",
              fontWeight: 500,
              fontSize: "16px",
              linEheight: "19PX",
            }}
          >
            This task has been completed
          </Typography>
          <TaskActions trash edit currentTask={currentTask} />
        </CardActions>
      );
    default:
      return `1 default card`;
  }
};

const TaskDetailsCard = ({
  currentTask,
  title,
  description,
  createdAt,
  dueDate,
  status,
  currentUser,
  assignedTo,
  createdBy,
}) => {
  return (
    <StyledCard>
      <Box>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Box>
            <Badge
              variant="standard"
              badgeContent={status}
              color={selectBadgeColor(status)}
              sx={{ marginLeft: "40px" }}
            ></Badge>
            {renderRoles(status, currentUser, assignedTo, createdBy)}
          </Box>
          <Typography variant="body1" className="card-details-content-text">
            {description}
          </Typography>
        </CardContent>
        {renderSwitch(currentTask, status, currentUser, assignedTo, createdBy)}
      </Box>
      <Box>
        <Box className="dates-div">
          <img src={emptyCercle} className="empty-cercle" alt="Date Created" />
          <img src={fullCercle} className="full-cercle" alt="Due Date" />
          <Box>
            <Typography variant="subtitle1" className="date-title">
              Date Created
            </Typography>
            <Typography variant="subtitle2">{createdAt}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" className="date-title">
              Due Date
            </Typography>
            <Typography variant="subtitle2">{dueDate}</Typography>
          </Box>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default TaskDetailsCard;
