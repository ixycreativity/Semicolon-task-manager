import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3754DB",
      light: "#F5F7FE",
    },
    secondary: {
      main: "#B80020",
      contrastText: "#FFF",
    },
    error: {
      main: "#FB151A",
    },
    warning: {
      main: "#EBA300",
    },
    info: {
      main: "#6684FF",
    },
    success: {
      main: "#00C271",
    },
    text: {
      primary: "#16171D",
      secondary: "#62667E",
      disabled: "#C2C4CF",
    },

    inProgress: {
      main: "#F2F4FD",
      contrastText: "#3754DB",
    },
    inReview: {
      main: "#F7F2FD",
      contrastText: "#8937DB",
    },
    completed: {
      main: "#F0FFF9",
      contrastText: "#00C271",
    },

    pending: {
      main: "#FFFDF5",
      contrastText: "#DF9A00",
    },
    unassigned: {
      main: "#FFF0F0",
      contrastText: "#B80020",
    },
    unassignedGrey: {
      main: "#F2F2F2",
      contrastText: "#808080",
    },
    primaryLight: {
      main: "#FFF2F4",
      contrastText: "#B80020",
    },
    secondaryLight: {
      main: "#EEF0FC",
      contrastText: "#3754DB",
    },
  },
  typography: {
    fontFamily: "Gelion",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'Gelion';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
                font-family: 'Gelion';
                font-style: bold;
                font-display: swap;
                font-weight: 700;
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              },
              @font-face {
                font-family: 'Gelion';
                font-style: light;
                font-display: swap;
                font-weight: 200;
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
          `,
    },

    MuiBadge: {
      styleOverrides: {
        status: {
          padding: "5px 12px",
          whiteSpace: "nowrap",
          fontWeight: "600",
          fontSize: "12px",
          lineHeight: "14px",
          height: "23px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        login: {
          width: "180px",
          height: "48px",
          border: "1.7px solid #3754DB",
          color: "#3754DB",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "16px",
        },
        create: {
          width: "180px",
          height: "48px",
          border: "1.7px solid #3754DB",
          backgroundColor: "#fff",
          color: "#3754DB",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "16px",
        },
        delete: {
          border: "1.7px solid #FFF0F0",
          backgroundColor: "#FFF0F0",
          color: "#B80020",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "19px",
        },
        logout: {
          "&": {
            width: "208px",
          },
          border: "1.7px solid #FFF0F0",
          backgroundColor: "#FFF0F0",
          color: "#B80020",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "19px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle: {
          color: "#62667E",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          // display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          width: "350px",
          height: "81px",
          fontWeight: "300",
          fontStyle: "italic",
          fontSize: "12px",
          lineHeight: "14px",
          // letterSpacing: "-0.02em",
        },
        message: {
          marginLeft: "20px",
        },
        filledWarning: {
          color: "#fff",
        },
        filledSuccess: {
          color: "#fff",
        },
        outlinedError: {
          color: "#B80020",
        },
        outlinedWarning: {
          color: "#00C271",
        },
        outlinedInfo: {
          color: "#6684FF",
        },
        outlinedSuccess: {
          color: "#00C271",
        },
        icon: {
          marginLeft: "14px",
        },
        action: {
          marginBottom: "30px",
          marginRight: "2px",
        },
        success: {
          icon: "<DoneRoundedIcon/>",
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: "500",
          fontStyle: "normal",
          fontSize: "18px",
          lineHeight: "22px",
          // letterSpacing: "-0.02em",
        },
        filledWarning: {
          color: "#fff",
        },
        filledSuccess: {
          color: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          margin: "12px 0px 4px 0px",
          width: "100%",
          backgroundColor: "#fbfbfe",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2c2e3a",
          lineHeight: "19px",
          marginTop: "18px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          color: "#6E7391",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: "24px",
          width: "500px",
          height: "600px",
          borderRadius: "20px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "0px 16px 6px",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          justifyContent: "flex-start",
        },
      },
    },
  },
});

export default theme;
