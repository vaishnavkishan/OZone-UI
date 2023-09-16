import React, { useState } from "react";
import { useField, Formik } from "formik";
import { TextField } from "@material-ui/core";
import styles from "./styles/formikTextFieldStyles";
import PropTypes from "prop-types";
import moment from "moment";
import { daysToWeeks } from "date-fns";
import DatePicker from "react-datepicker";

const FormikDateField = (props) => {
  const classes = styles();
  const [field, meta] = useField(props.name);
  const [focus, setFocused] = useState(false);
  const { value, onChange, onBlur } = field;
  const { error, touched } = meta;
  const onFocus = () => setFocused(true);

  return (
    // <TextField
    //   id="date"
    //   type={value || focus ? "date" : "text"}
    //   value={value}
    //   onChange={onChange}
    //   onBlur={onBlur}
    //   onFocus={onFocus}
    //   error={touched && Boolean(error)}
    //   helperText={touched ? error : " "}
    //   FormHelperTextProps={{
    //     className: classes.helperText,
    //   }}
    //   InputProps={{
    //     classes: {
    //       input: "CustomTextField",
    //     },
    //   }}
    //   InputLabelProps={Boolean(error) && { shrink: true }}
    //   {...props}
    //   defaultValue={
    //     value !== "" ? moment(value).format("yyyy-MM-DD") : new Date()
    //   }
    // />

    <TextField
      id="date"
      type={value || focus ? "date" : "text"}
      // type="datetime-local"
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      defaultValue="2017-05-24T10:30"
      error={touched && Boolean(error)}
      helperText={touched ? error : " "}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
      InputProps={{
        classes: {
          input: "CustomTextField",
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default FormikDateField;
