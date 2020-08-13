import React from "react";
import SignupForm from "./SignupForm";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmationScreen from "./ConfirmationScreen";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: `4vh auto`,
    maxWidth: "30rem",
    minWidth: "16rem",
    height: "26rem",
  },
  header: { marginBottom: theme.spacing(2) },
}));
function SignupView() {
  const [success, setSuccess] = React.useState(false);
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.paper}>
        {success ? (
          <ConfirmationScreen />
        ) : (
          <>
            <Typography variant="h4" className={classes.header}>
              Signup Form
            </Typography>
            <SignupForm setSuccess={setSuccess} />
          </>
        )}
      </Paper>
    </Container>
  );
}

export default SignupView;
