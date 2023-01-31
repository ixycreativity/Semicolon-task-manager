import React from "react";
import { Typography, Box } from "@mui/material";
import PageLayout from "../components/shared/page-layout/PageLayout";
import hand from "../assets/images/hand.png.png";
import notificationBackground from "../assets/images/notif-bg.png";
import addProfileImage from "../assets/images/add-profile-image.png";
import addFirstTask from "../assets/images/add-first-task.png";
import arrowRightBig from "../assets/images/arrow-right-big.png";
import arrowRightBlack from "../assets/images/arrow-right-black.png";
import Button from "../components/shared/button/Button";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const data = useSelector(
    (state) => state.app.auth.loggedUser.userInfo || null
  );
  const name = data?.fullName.split(" ");

  return (
    <PageLayout>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        <img
          src={hand}
          alt="avhandatarPlaceholder"
          sx={{
            width: "56px",
            height: "56px",
          }}
        />
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "43px",
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            {`Hi ${name[0]}`}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#636363",
            }}
          >
            Welcome to Semicolon Task Management
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "799px",
          height: "146px",
          borderRadius: "20px",
          background: `#fff url(${notificationBackground}) no-repeat center left`,
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "22px",
            lineHeight: "28px",
            letterSpacing: "-0.02em",
            color: "#FFF",
            width: "190px",
          }}
        >
          Motivation to help you work.
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{
            height: "39px",
          }}
        >
          Get Started
        </Button>
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "24px",
          letterSpacing: "-0.02em",
          color: "#000000",
          margin: "30px 0px 25px 0px",
        }}
      >
        Let’s get you started
      </Typography>
      <Box
        sx={{
          maxWidth: "799px",
          height: "72px",
          background: "#FFFFFF",
          border: "2px solid #8098FF",
          borderRadius: "16px",
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "500px",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            src={addProfileImage}
            alt="add profile image"
            sx={{
              width: "48px",
              height: "48px",
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#3754DB",
            }}
          >
            {`Hey ${name[0]}, Update your Profile Picture`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "15px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#3754DB",
              marginRight: "15px",
            }}
          >
            Get started
          </Typography>
          <img
            src={arrowRightBig}
            alt="get started"
            sx={{
              width: "28px",
              height: "28px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "799px",
          height: "72px",
          background: "#FFFFFF",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "500px",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            src={addFirstTask}
            alt="add first task"
            sx={{
              width: "48px",
              height: "48px",
            }}
          />
          <Typography>Create the first Task in your Workspace</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "15px",
          }}
        >
          <Typography
            sx={{
              marginRight: "15px",
            }}
          >
            Get started
          </Typography>
          <img
            src={arrowRightBlack}
            alt="get started"
            sx={{
              width: "28px",
              height: "28px",
            }}
          />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Dashboard;
