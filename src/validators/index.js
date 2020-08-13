import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "Please enter a maximum of 50 characters")
    .required("What's your first name?"),
  lastName: Yup.string()
    .max(50, "Please enter a maximum of 50 characters")
    .required("What's your last name?"),
  email: Yup.string()
    .email("Not a valid email address")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(6, "A valid password is at least 6 characters long")
    .max(50, "Please enter a maximum of 50 characters")
    .required("Please enter a valid password"),
});
