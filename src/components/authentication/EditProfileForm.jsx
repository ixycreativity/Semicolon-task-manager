import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Stack,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Button from "../shared/button/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { fn } from "moment/moment";
import { updateLoggedUser, logOut } from "../../store/app/app.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  // password: Yup.string()
  //   .max(20, "Must be 20 characters or less")
  //   .required("Required"),
});

const EditProfileForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { buttonText, handleClose, data } = props;

  // const [showPassword, setShowPassword] = useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const usertoken = useSelector(
    (state) => state.app.auth.loggedUser.accessToken
  );
  // console.log(usertoken, "din EditProfileForm");

  const formik = useFormik({
    initialValues: {
      fullName: data?.fullName || "",
      email: data?.email || "",
      // password: data.password || "",
    },
    validationSchema: validationSchema,
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    //   dispatch(updateLoggedUser(values));
    // },
    onSubmit: async (values) => {
      try {
        let response = await axios.patch(
          `${API_BASE_URL}/user/update`,
          {
            ...values,
          },
          {
            headers: {
              Authorization: `Bearer ${usertoken.accessToken}`,
            },
          }
        );
        updateLoggedUser(response.data);

        // close modal, logOut and go to Login Page;
        dispatch(handleClose);
        dispatch(logOut());
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <InputLabel htmlFor="fullName">Fullname</InputLabel>
      <OutlinedInput
        fullWidth
        id="fullName"
        name="fullName"
        type="text"
        {...formik.getFieldProps("fullName")}
      />
      <FormHelperText>
        {formik.touched.fullName && formik.errors.fullName ? (
          <div>This field is {formik.errors.fullName.toLocaleLowerCase()}</div>
        ) : (
          "Please enter your fullname!"
        )}
      </FormHelperText>

      <InputLabel htmlFor="email">Email Address</InputLabel>
      <OutlinedInput
        fullWidth
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps("email")}
      />
      <FormHelperText>
        {formik.touched.email && formik.errors.email ? (
          <div>This field is {formik.errors.email.toLocaleLowerCase()}</div>
        ) : (
          "Example: mano@gmail.com"
        )}
      </FormHelperText>

      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        disabled
        fullWidth
        id="password"
        name="password"
        type="text"
        // type={showPassword ? "text" : "password"}
        // {...formik.getFieldProps("password")}
        // endAdornment={
        //   <InputAdornment position="end">
        //     <IconButton
        //       aria-label="toggle password visibility"
        //       onClick={handleClickShowPassword}
        //       onMouseDown={handleMouseDownPassword}
        //     >
        //       {showPassword ? <Visibility /> : <VisibilityOff />}
        //     </IconButton>
        //   </InputAdornment>
        // }
      />
      {/* <FormHelperText>
        {formik.touched.password && formik.errors.password ? (
          <div>This field is {formik.errors.password.toLocaleLowerCase()}</div>
        ) : (
          "Upto 8 characters with an Uppercase, symbol and number"
        )}
      </FormHelperText> */}

      <Button
        fullWidth
        sx={{ marginTop: "48px" }}
        variant="contained"
        type="submit"
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default EditProfileForm;
