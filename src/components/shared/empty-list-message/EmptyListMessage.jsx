import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import emptyListImge from "../../../assets/images/emptyListImage.png";
import VarModal from "../../modals/VarModal";

const StyledBox = styled(Box)(({ theme }) => ({
  "&": {
    width: "100%",
    height: "80vh",
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0px",
    left: "0px",
  },
  "& .empty-list-heading": {
    fontWeight: 600,
    fontSize: "28px",
    lineHeight: "34px",
    letterSpacing: "-0.02em",
    color: "#000000",
    opacity: "0.8",
    pddingTop: "40px",
  },
  "& .empty-list-text": {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "-0.02em",
    color: "#6D6C6C",
    marginTop: "-20px",
  },
}));

const EmptyListMessage = () => {
  return (
    <StyledBox>
      <img
        src={emptyListImge}
        alt="no tasks"
        sx={{
          width: "152px",
          height: "133px",
        }}
      />
      <Typography className="empty-list-heading">No Tasks Yet</Typography>
      <Typography className="empty-list-text">
        You have no task created in your workspace yet.
      </Typography>
      <Typography className="empty-list-text">
        Get productive. Create a Task Now.
      </Typography>
      <VarModal variant="createTask" />
    </StyledBox>
  );
};

export default EmptyListMessage;
