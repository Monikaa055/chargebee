import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Testimonial from "../ui/Testimonial";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import heroImage from "../../assets/heroimage@2x.png";
import logo1 from "../../assets/logo/goop.png";
import logo2 from "../../assets/logo/study.png";
import logo3 from "../../assets/logo/freshworks.png";
import subscription from "../../assets/subscription-automation.svg";
import billing from "../../assets/billing-experiments.svg";
import integration from "../../assets/integration.svg";
import pricing from "../../assets/pricing.png";

import TabFold from "../ui/TabFold";

const useStyles = makeStyles((theme) => ({
  pricingImage: {
    height: "25em",
    width: "40em",
  },
  mobh1: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "em",
    },
  },
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
  myButton: {
    ...theme.typography.myButton,
    fontSize: "1rem",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  myButton2: {
    ...theme.typography.myButton,
    fontSize: "1rem",
    color: "#868686",
    borderWidth: 2,
    borderColor: "#868686",
    background: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  heroImage: {
    height: "50em",
    position: "absolute",
    right: "-1em",
    top: " 3em",

    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
      height: "20em",
      marginBottom: "20em",
    },
  },
  logos: {
    height: "2em",
    margin: "0 10px",
    top: " 3em",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      direction="column"
      style={{ marginTop: "150px" }}
      className={classes.mainContainer}
    >
      <Grid item container direction="column" sm={5}>
        <Typography variant="h1" gutterBottom className={classes.mobh1}>
          Subscription Billing & Revenue Operations
        </Typography>
        <Typography variant="h2" gutterBottom>
          For Business Designed for Growth
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Chargebee gives you the freedom to deploy the right growth strategies,
          while automating everyything else in your order-to-growth revenue
          workflow.
        </Typography>
        <Grid item style={{ marginTop: "20px" }}>
          <Button className={classes.myButton}>Get a Consultation</Button>
          <Button className={classes.myButton2}>Signup for Free</Button>
        </Grid>
        <Typography variant="subtitle2" gutterBottom>
          Trusted by leading brands to process over $3Bn in recurring revenue.
        </Typography>
        <Grid item m={5} style={{ marginTop: "30px" }}>
          <img
            src={logo1}
            alt="Goop"
            className={classes.logos}
            style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
          />
          <img
            src={logo2}
            alt="Study"
            className={classes.logos}
            style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
          />
          <img
            src={logo3}
            alt="Freshworks"
            className={classes.logos}
            style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
          />
        </Grid>
      </Grid>
      <Grid item container direction="column" sm={7}>
        <Grid item m={5}>
          <img
            src={heroImage}
            alt="hero image"
            className={classes.heroImage}
            style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
          />
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" sm={4}>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ color: "#EE5F40" }}
          >
            DEPLOY STRATEGIES
          </Typography>
          <Typography variant="h2" gutterBottom>
            What does this challenge make possible?
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A challenging world requires an evolving business stratefy.
            Chargebee lets you adapt business models and deploy strategies as
            fast as you can think of them.
          </Typography>
        </Grid>
        <Grid item container direction="column" sm={8}>
          <img
            src={pricing}
            alt="Pricing"
            className={classes.pricingImage}
            style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
          />
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" sm={4}>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ color: "#EE5F40" }}
          >
            BEYOND BILLING
          </Typography>
          <Typography variant="h2" gutterBottom>
            Streamline Your Entire RevOps Workflow
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            The next big revenue opportunity need not be familiar. Chargebee
            gives you the infrastructure to discover and turn every revenue
            potential into a business outcome.
          </Typography>
        </Grid>
        <Grid item container direction="column" sm={8}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab
              label="Subscription Automation"
              component={Link}
              to="#subscription"
            />
            <Tab label="Billing Experiments" component={Link} to="#billing" />
            <Tab label="Extensible Platform" component={Link} to="#platform" />
          </Tabs>
          <TabFold
            id="subscription"
            image={subscription}
            heading="Automate the Order-To-Revenue Lifecycle"
            description="Collect recurring payments and automate your subscription billing
            logic - from checkout to reconciliation."
            cta="Subscription Automation"
          />
          <TabFold
            id="billing"
            image={billing}
            heading="Evolve your Billing Workflow to Fit Your Business Strategy"
            description="Adjust pricing structure, product bundles, acquisiton flows and recovery processes to maximise revenue."
            cta="Billing Experiments"
          />
          <TabFold
            id="platform"
            image={integration}
            heading="Scale Your Revenue Stack for Each Stage of Growth"
            description="Upgrade finance, accounting, CRM, and more on the revenue engine that scales with you."
            cta="Extensible Platform"
          />
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Testimonial />
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" sm={4}>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ color: "#EE5F40" }}
          >
            FOR THE MODERN CFO
          </Typography>
          <Typography variant="h2" gutterBottom>
            Spend less time Closing, More time Driving
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" sm={4}>
          <Typography variant="h4" gutterBottom>
            GAAP Complaint RevRec
          </Typography>
          <Typography variant="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Typography>
          <a style={{ color: "#120EF0" }}>Deferred Revenue Report</a>
        </Grid>
        <Grid item container direction="column" sm={4}>
          <Typography variant="h4" gutterBottom>
            Collections & Reconciliation
          </Typography>
          <Typography variant="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Typography>
          <a style={{ color: "#120EF0" }}>One-touch Reconciliation</a>
        </Grid>
        <Grid item container direction="column" sm={4}>
          <Typography variant="h4" gutterBottom>
            A/R & DSO Management
          </Typography>
          <Typography variant="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Typography>
          <a style={{ color: "#120EF0" }}>Smart Dunning</a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
