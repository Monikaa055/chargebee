import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import nathan from "../../assets/testimonial/nathanfeld-drawboard.png";
const useStyles = makeStyles((theme) => ({
  testimonial: {
    height: "5em",
  },
  myButton: {
    ...theme.typography.myButton,
    fontSize: "1rem",
    background: "#ffffff",
    paddingLeft: "0",
    color: "#120EF0",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));
const Testimonial = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Grid item direction="row" style={{ margin: "0 auto" }}>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <Tab label="Rethinking Pricing" component={Link} to="#" />
          <Tab label="Automate Finops" component={Link} to="#" />
          <Tab label="Go Global" component={Link} to="#" />
        </Tabs>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="row">
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" lg={8}>
                <Typography variant="h2" gutterBottom>
                  Achieved 20x ROI with Chargebee
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  A challenging world requires an evolving business stratefy.
                  Chargebee lets you adapt business models and deploy strategies
                  as fast as you can think of them.
                </Typography>
                <a className={classes.myButton}>Read Case Study</a>
              </Grid>
              <Grid direction="column" lg={4}>
                <img
                  src={nathan}
                  alt="Nathan"
                  className={classes.testimonial}
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Testimonial;
