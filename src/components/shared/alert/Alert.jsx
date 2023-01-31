import { Stack, Alert, AlertTitle } from "@mui/material";
import { PoseaTasksList } from "../../tasks-list/PoseaTasksList";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const MuiAlert = () => {
  return (
    <Stack spacing={3} padding="30px">
      <PoseaTasksList />
      <Stack direction="row" spacing={10}>
        <Stack spacing={2}>
          <Alert
            variant="outlined"
            severity="error"
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Error</AlertTitle>
            This is an error alert
          </Alert>
          <Alert
            variant="outlined"
            severity="warning"
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Warning</AlertTitle>
            This is an warning alert
          </Alert>
          <Alert
            variant="outlined"
            severity="info"
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Info</AlertTitle>
            This is an info alert
          </Alert>
          <Alert
            variant="outlined"
            severity="success"
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Success</AlertTitle>
            This is an success alert
          </Alert>
        </Stack>
        <Stack spacing={2}>
          <Alert
            variant="filled"
            severity="error"
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Error</AlertTitle>
            This is an error alert
          </Alert>
          <Alert
            variant="filled"
            severity="warning"
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Warning</AlertTitle>
            This is an warning alert
          </Alert>
          <Alert
            variant="filled"
            severity="info"
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Info</AlertTitle>
            This is an info alert
          </Alert>
          <Alert
            variant="filled"
            severity="success"
            icon={<CheckCircleRoundedIcon fontSize="inherit" />}
            onClose={() => alert("Close alert")}
          >
            <AlertTitle>Success</AlertTitle>
            This is an success alert
          </Alert>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiAlert;
