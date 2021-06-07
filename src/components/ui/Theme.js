import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#ffffff";
const seconday = "#6100BB";
const orange = "#EE5F40";
const darkBlue = "#030343";
const purple = "linear-gradient(45deg, #4300A3 0%, #6100BB 100%)";
const grey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: primary,
      orange: seconday,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: seconday,
    },
  },
  typography: {
    tab: {
      fontFamily: "Railway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "3rem",
      color: orange,
      lineHeight: 1.25,
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: darkBlue,
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      lineHeight: 1.25,
      fontWeight: 700,
      color: darkBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      color: darkBlue,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Raleway",
      lineHeight: 1,
      color: primary,
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: darkBlue,
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "1rem",
      color: darkBlue,
      marginTop: "2em",
    },
    body1: {
      fontSize: "1.25rem",
      color: grey,
      fontWeight: 300,
    },
    myButton: {
      borderColor: purple,
      color: primary,
      background: purple,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 5,
      fontFamily: "Roboto",
      fontWeight: "bold",
      padding: 8,
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        MuiListItemText: {
          textColorPrimary: grey,
          color: grey,
        },
      },
    },
    MuiTab: {
      textColorPrimary: darkBlue,
    },
    MuiGrid: {
      container: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        padding: "20px 30px",
      },
    },
    MuiAppBar: {
      colorPrimary: "#ffffff",
    },
    MuiInputLabel: {
      root: {
        color: primary,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${primary}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${primary}`,
        },
      },
    },
    MuiListItemText: {
      root: {
        color: grey,
      },
    },
  },
});
