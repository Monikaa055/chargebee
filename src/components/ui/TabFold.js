import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  subsImage: {
    height: "25em",
  },
  myButton: {
    ...theme.typography.myButton,
    fontSize: "1rem",
    background: "#ffffff",
    paddingLeft: 0,

    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function TabFold(props) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item container direction="row" id={props.id}>
        <Grid item container direction="column" sm={7}>
          <img
            src={props.image}
            alt="hero image"
            className={classes.subsImage}
            style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
          />
        </Grid>
        <Grid item container direction="column" sm={5}>
          <Typography variant="h3" gutterBottom>
            {props.heading}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.description}
          </Typography>
          <a className={classes.myButton} style={{ color: "#120EF0" }}>
            {props.cta}
          </a>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
