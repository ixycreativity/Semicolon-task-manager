import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  InputLabel,
  OutlinedInput,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Button from "../shared/button/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RecoverPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      newPass: "",
      confirmPass: "",
    },
    validationSchema: Yup.object({
      newPass: Yup.string()
        .required("Please enter your password.")
        .min(8, "Your password is too short."),
      confirmPass: Yup.string()
        .required("Please retype your password.")
        .oneOf([Yup.ref("newPass")], "Your passwords do not match."),
    }),
    onSubmit: (values) => {},
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <InputLabel htmlFor="recover-password">Password</InputLabel>
      <OutlinedInput
        fullWidth
        id="recover-password"
        name="newPass"
        type={showPassword ? "text" : "password"}
        {...formik.getFieldProps("newPass")}
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
        {formik.touched.newPass && formik.errors.newPass ? (
          <div>{formik.errors.newPass.toLocaleLowerCase()}</div>
        ) : (
          "Upto 8 characters with an Uppercase, symbol and number"
        )}
      </FormHelperText>

      <InputLabel htmlFor="recover-password-confirm">Password</InputLabel>
      <OutlinedInput
        fullWidth
        id="recover-password-confirm"
        name="confirmPass"
        type={showPassword ? "text" : "password"}
        {...formik.getFieldProps("confirmPass")}
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
        {formik.touched.confirmPass && formik.errors.confirmPass ? (
          <div>{formik.errors.confirmPass.toLocaleLowerCase()}</div>
        ) : (
          "Upto 8 characters with an Uppercase, symbol and number"
        )}
      </FormHelperText>

      <Button
        sx={{ width: "204px", marginTop: "24px" }}
        variant="contained"
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export default RecoverPasswordForm;
