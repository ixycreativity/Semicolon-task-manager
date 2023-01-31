import React from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormGroup } from '@mui/material';
import { Link } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
      
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
      
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
      
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
 
    return (
        <Box
            sx={{
                p: 1,
                ml: '120px',
                mt: '212px',
                mr: '936px',
                mb: '288px',
            }}
        >
            <Typography 
                sx={{
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '24px',
                    color: '#000000',
                    mb: '32px'
                }}
            >
                Welcome Back.
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <Typography
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        color: '#2C2E3A',
                        mb: '5px'
                    }}
                >
                    Email Address
                </Typography>
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderRadius: "16px" },
                        },
                        width: '384px',
                        height: '50px'
                    }}
                    fullWidth
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    variant="outlined"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <Typography
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        color: '#2C2E3A',
                        mt: '28px',
                        mb: '5px'
                    }}
                >
                    Enter Your Password
                </Typography>
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderRadius: "16px" },
                        },
                        mb: '46px',
                        width: '384px',
                        height: '50px'
                    }}
                    fullWidth
                    id="password"
                    name="password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handlePasswordChange("password")}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }  
                />
                    <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label={
                            <Typography 
                                sx={{
                                    color: '##000000',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                }}
                                variant="h6" 
                            >Keep me Signed in
                            </Typography>}
                        sx={{
                            '& .MuiSvgIcon-root': { width: '22px', height: '22px' },
                            mb: '64px',
                            borderRadius: '4px',
                            bgColor: '#5B73E1'
                        }}
                    />
                    </FormGroup>

                <Button 
                    sx={{
                        width: '204px',
                        height: '56px',
                        bgColor: '#3754DB',
                        borderRadius: '12px',
                        gap: '10px',
                        fontSize: '16px',
                        color: '#FFFFFF'
                    }}
                    variant="contained" 
                    type="submit"
                >
                    Log In
                </Button>
                <Link 
                    href="#"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mt: '52px',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        color: '#3754DB',
                        textDecoration: 'none'
                    }}
                >Forgot Password ?
                </Link>
            </form>
        </Box>
    );
}

export default Login;