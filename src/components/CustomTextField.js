import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  disabled: {
    color: theme.palette.text.primary,
  },
  root: {
    paddingBottom: theme.spacing(3),
  },
  helperText: { position: "absolute", top: "3rem" },
}));
function CustomTextField({ disabled, label, name, type }) {
  const classes = useStyles();

  return (
    <Field
      InputProps={{
        classes: {
          disabled: classes.disabled,
        },
        "data-testid": `testid-${name}`,
      }}
      InputLabelProps={{
        classes: {
          disabled: classes.disabled,
        },
      }}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
      classes={{ root: classes.root }}
      disabled={disabled}
      component={TextField}
      type={type || "text"}
      label={label}
      name={name}
    />
  );
}

export default CustomTextField;
