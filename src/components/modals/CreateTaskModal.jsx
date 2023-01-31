import { useState } from "react";
import Button from "../shared/button/Button";
import CustomDialogTitle from "./CustomDialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Stack,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createTaskAction } from "../../store/task/task.slice";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = Yup.object({
  taskName: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  taskDescription: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  // taskPriority: Yup.string().required("Required"),
  dueDate: Yup.date().required("Required"),
});

const CreateTaskModal = (props) => {
  const dispatch = useDispatch();

  const { handleClose, open, variant } = props;
  const [date, setDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      taskName: "",
      taskDescription: "Type your content here....",
      // taskPriority: "Normal",
      dueDate: date.toLocaleString(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(createTaskAction(values));
      // dispatch(handleClose);
    },
  });

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <CustomDialogTitle onClose={handleClose}>
            Create Task
          </CustomDialogTitle>
          <DialogContent>
            <InputLabel htmlFor="taskName">Task Name</InputLabel>
            <OutlinedInput
              // autoComplete="off"
              fullWidth
              id="taskName"
              name="taskName"
              type="text"
              {...formik.getFieldProps("taskName")}
            />
            {/* <FormHelperText>
              {formik.touched.taskName && formik.errors.taskName ? (
                <div>
                  This field is {formik.errors.taskName.toLocaleLowerCase()}
                </div>
              ) : (
                "Please enter a Task Name!"
              )}
            </FormHelperText> */}
            <Stack direction="row" spacing={1} justifyContent="space-between">
              <Stack sx={{ width: "50%" }}>
                <InputLabel htmlFor="taskPriority">Task Priority</InputLabel>
                <Select
                  defaultValue="Normal"
                  id="taskPriority"
                  name="taskPriority"
                  type="text"
                  {...formik.getFieldProps("taskPriority")}
                >
                  <MenuItem value="Less Important">Less Important</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </Stack>
              <Stack>
                <InputLabel htmlFor="dueDate">Due Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disablePast
                    inputFormat="MM/DD/YYYY"
                    // openTo="day"
                    views={["month", "day"]}
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => {
                      return (
                        <TextField
                          {...params}
                          id="dueDate"
                          name="dueDate"
                          type="text"
                          {...formik.getFieldProps("dueDate")}
                        />
                      );
                    }}
                    components={{
                      OpenPickerIcon: CalendarMonthOutlinedIcon,
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </Stack>

            <InputLabel htmlFor="taskDescription">Task Description</InputLabel>
            <OutlinedInput
              fullWidth
              multiline
              rows={4}
              id="taskDescription"
              name="taskDescription"
              // placeholder="Type your content here...."
              type="text"
              {...formik.getFieldProps("taskDescription")}
            />
            {/* <FormHelperText>
        {formik.touched.taskDescription && formik.errors.taskDescription ? (
          <div>This field is {formik.errors.taskDescription.toLocaleLowerCase()}</div>
        ) : (
          "Please enter your task description!"
        )}
      </FormHelperText> */}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              // autoFocus
              sx={{ width: "50%" }}
              type="submit"
            >
              {variant}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateTaskModal;
