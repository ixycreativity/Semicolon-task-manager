import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Input,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

export const CustomInput = (props) => {
  const { type } = props;

  // const renderEmailType = () => {
  //   if (type === "email") {
  //     return <EmailInput />;
  //   }
  // };

  // const renderPasswordType = () => {
  //   if (type === "password") {
  //     return <PasswordInput />;
  //   }
  // };

  return (
    <FormControl sx={{ width: "384px" }}>
      <InputLabel
        htmlFor="my-input"
        sx={{
          // display: "contents",
          color: "#2c2e3a",
          lineHeight: "19px",
        }}
      >
        Email address
      </InputLabel>
      <OutlinedInput
        id="my-input"
        name="newPass"
        aria-describedby="my-helper-text"
        sx={{
          width: "100%",
          marginTop: "14px",
          border: "0.7px solid #A8ABBD",
          borderRadius: "12px",
        }}
      />
      <FormHelperText id="my-helper-text" sx={{ marginLeft: 0 }}>
        Example: mano@gmail.com
      </FormHelperText>

      {/* <InputLabel
        htmlFor={type}
        sx={{
          color: "#2c2e3a",
          lineHeight: "19px",
        }}
      >
        {type}
      </InputLabel>
      <OutlinedInput id={type} name="newPass"></OutlinedInput>
      <TextField
        required
        label="asd"
        // sx={{ paddingTop: "24px" }}
        placeholder="Email Address"
        helperText="Example: mano@gmail.com"
      /> */}
      {/* <OutlinedInput
            id={type}
            name="newPass"
            value={formik.values.newPass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            sx={{
              width: "100%",
              marginTop: "14px",
              border: "0.7px solid #A8ABBD",
              borderRadius: "12px",
            }}
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
          /> */}
    </FormControl>
  );
};

CustomInput.propTypes = {
  type: PropTypes.oneOf(["name", "email", "password"]).isRequired,
};
