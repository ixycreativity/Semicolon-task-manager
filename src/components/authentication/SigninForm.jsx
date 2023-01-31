import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Stack,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Button from "../shared/button/Button";
import CheckBox from "@mui/material/Checkbox";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { logInAction, getLoggedUserAction } from "../../store/app/app.slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.auth.isLoading);

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        let res = await axios.post(`${API_BASE_URL}/auth/signin`, {
          email: values.email,
          password: values.password,
        });
        dispatch(logInAction(res.data));
        let res2 = await axios.get(`${API_BASE_URL}/user/logged-user`, {
          headers: {
            Authorization: `Bearer ${res.data.accessToken}`,
          },
        });
        dispatch(getLoggedUserAction(res2));
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
        fullWidth
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        {...formik.getFieldProps("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>
        {formik.touched.password && formik.errors.password ? (
          <div>This field is {formik.errors.password.toLocaleLowerCase()}</div>
        ) : (
          "Upto 8 characters with an Uppercase, symbol and number"
        )}
      </FormHelperText>

      <Stack
        direction="row"
        spacing={1.2}
        sx={{ paddingTop: "25px", alignItems: "center" }}
      >
        <CheckBox
          checked={checked}
          onChange={handleChange}
          color="primary"
          size="medium"
          disableRipple
        ></CheckBox>
        <Typography
          sx={{
            fontWeight: "600",
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "-0.02em",
          }}
        >
          Keep me Signed in
        </Typography>
      </Stack>

      <Button sx={{ width: "204px" }} variant="contained" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default SigninForm;
