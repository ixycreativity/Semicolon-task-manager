import { useFormik } from "formik";
import * as Yup from "yup";
import { InputLabel, OutlinedInput, FormHelperText } from "@mui/material";
import Button from "../shared/button/Button";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const ForgotPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <InputLabel htmlFor="forgot-email">Email Address</InputLabel>
      <OutlinedInput
        fullWidth
        id="forgot-email"
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

      <Button
        sx={{ width: "204px", marginTop: "24px" }}
        variant="contained"
        type="submit"
      >
        Next
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
