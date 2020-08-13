import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { signupSchema } from "../validators";
import axios from "axios";
import CustomTextField from "./CustomTextField";

const campaignUuid = "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a";
const serverErrorMessage =
  "Oops! Something went wrong with our servers. Please try again!";

const useStyles = makeStyles((theme) => ({
  formItems: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
  serverError: {
    color: "#F44336",
    marginTop: theme.spacing(1),
  },
}));

function SignupForm({ setSuccess }) {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = React.useState("");

  const asyncValidation = async (email) => {
    try {
      const validationObject = {
        campaignUuid,
        data: { email },
      };
      const response = await axios.post(
        "https://api.raisely.com/v3/check-user",
        validationObject
      );
      return { status: response.data.data.status };
    } catch (error) {
      console.error(error);
      setErrorMessage(serverErrorMessage);
      return {
        error: serverErrorMessage,
      };
    }
  };

  const signupRequest = async (values) => {
    const validationObject = {
      campaignUuid,
      data: values,
    };
    try {
      const response = await axios.post(
        "https://api.raisely.com/v3/signup",
        validationObject
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={signupSchema}
      onSubmit={async (values, { setFieldError }) => {
        try {
          const validationResult = await asyncValidation(values.email);
          if (validationResult.status === "OK") {
            const response = await signupRequest(values);
            response.status === 200 && setSuccess(true);
          } else if (validationResult.status === "EXISTS") {
            setFieldError("email", "Email address already in use");
          }
        } catch (error) {
          setErrorMessage(serverErrorMessage);
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <div className={classes.formItems}>
            <CustomTextField
              label="First Name"
              name="firstName"
              disabled={false}
            />
            <CustomTextField
              label="Last Name"
              name="lastName"
              disabled={false}
            />
            <CustomTextField
              type="email"
              label="Email Address"
              name="email"
              disabled={false}
            />
            <CustomTextField
              type="password"
              label="Password"
              name="password"
              disabled={false}
            />
          </div>
          {isSubmitting && <LinearProgress />}
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
            fullWidth
          >
            Sign Up
          </Button>
          {errorMessage && (
            <Typography
              className={classes.serverError}
              variant="caption"
              component="p"
            >
              {errorMessage}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
