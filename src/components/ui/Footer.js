import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  MuiGrid: {
    container: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        padding: "20px 20px",
      },
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  myButton: {
    ...theme.typography.myButton,
    fontSize: "1rem",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  learnButton: {
    margin: "0 10px",
    padding: "10px 20px",
  },
}));
const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Grid container direction="row" style={{ background: "#F3EFFF" }}>
        <Grid item container direction="column" sm={8}>
          <Typography variant="h2" gutterBottom>
            Experience the Smartest Wayto Automate Recurring Payments
          </Typography>
        </Grid>
        <Grid item container direction="column" sm={4}>
          <Grid container justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button
                className={classes.myButton}
                variant="contained"
                component={Link}
                to="/demo"
              >
                Schedule a Demo
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/signup"
              >
                <span style={{ marginRight: 10, color: "#5C07D1" }}>
                  Learn More
                </span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
