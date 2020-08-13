import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: { fontSize: "8rem", color: green[500] },
}));
function ConfirmationScreen() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4">Sign Up Complete!</Typography>
      <CheckCircleIcon className={classes.icon} />
      <Link href="https://www.raisely.com/" underline="none">
        <Button>Back to our homepage</Button>
      </Link>
    </div>
  );
}

export default ConfirmationScreen;
