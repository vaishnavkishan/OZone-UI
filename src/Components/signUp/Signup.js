import React, { useState } from "react";
import { Form, Formik } from "formik";
import { FormikTextField, FormikSelect } from "../formik";
import { Button } from "@material-ui/core";
import styles from "./styles/signupStyles";
import { formSchema, initialValues } from "./services/signupFormService";
import useSignup from "./hooks/useSignup";
import FormikDateField from "../formik/FormikDateField";
import SignupConfirmation from "./SignupConfirmation";
import DateAndTimePickers from "../formik/CustomDatePicker";

const Signup = ({ history }) => {
  const classes = styles();

  const { handleSignup, success } = useSignup();
  const [showSignupConfirmation, setShowSignupConfirmation] = useState(false);

  const handleSubmit = (values) => {
    console.log("inside handle submit-button");
    handleSignup(values);
    setShowSignupConfirmation(success);
  };

  console.log("from signup" + initialValues);
  console.log(initialValues);
  return (
    <div className={classes.signupContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={classes.signupForm}>
          <FormikTextField
            required
            margin="dense"
            name="eventName"
            label="Event Name"
            data-testid="eventName"
          />
          <DateAndTimePickers
            required
            margin="dense"
            name="eventDate"
            label="Event Date"
            data-testid="eventDate"
          />
          <FormikSelect
            required
            id="eventModeId"
            name="eventModeId"
            dropdownLabel="Event Mode"
            options={[
              { value: "online", display: "offline" },
              { value: "offline", display: "offline" },
            ]}
            data-testid="eventMode"
          />

          <FormikTextField
            required
            margin="dense"
            name="modeDetails"
            label="Mode Details"
            data-testid="modeDetails"
          />
          <FormikTextField
            required
            margin="dense"
            name="topic"
            label="Topic"
            data-testid="topic"
          />
          <FormikTextField
            required
            margin="dense"
            name="speakers"
            label="Speakers"
            data-testid="speakers"
          />
          <FormikTextField
            required
            margin="dense"
            name="eventDetails"
            label="Event Details"
            data-testid="eventDetails"
          />
          <FormikTextField
            required
            margin="dense"
            name="personOfContact"
            label="Person Of Contact"
            data-testid="personOfContact"
          />
          <FormikTextField
            required
            margin="dense"
            name="rules"
            label="Rules"
            data-testid="rules"
          />
          <FormikDateField
            required
            margin="dense"
            name="deadLine"
            label="Dead Line"
            data-testid="deadLine"
          />
          <FormikTextField
            required
            margin="dense"
            name="community"
            label="Community"
            data-testid="community"
          />
          <FormikTextField
            required
            margin="dense"
            name="capacity"
            label="Capacity"
            data-testid="capacity"
          />
          <FormikSelect
            required
            id="typeId"
            name="typeId"
            dropdownLabel="Type"
            options={[
              { value: "internal", display: "internal" },
              { value: "external", display: "external" },
            ]}
            data-testid="typeId"
          />

          <FormikTextField
            required
            margin="dense"
            name="tags"
            label="Tags"
            data-testid="tags"
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.signupButton}
            data-testid="submit"
          >
            Create Event
          </Button>
          <SignupConfirmation
            history={history}
            open={success}
            onClose={() => {
              setShowSignupConfirmation(false);
            }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
