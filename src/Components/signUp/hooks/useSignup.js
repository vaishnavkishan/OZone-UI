import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/signupStyles";
import signupFormService from "../services/signupFormService";
//import { Console } from "console";

export default () => {
  const classes = styles();
  const [success, setSuccess] = useState(false);

  //   const errorMessage = () => {
  //     if (error !== "") {
  //       return (
  //         <Typography
  //           variant="body1"
  //           color="error"
  //           className={classes.signupErrorMessage}
  //         >
  //           {error}
  //         </Typography>
  //       );
  //     }
  //   };

  const handleSignup = async (values) => {
    console.log("inside handle signup method");
    console.log(values);
    setSuccess(false);
    const payload = {
      name: values.eventName,
      date: values.eventDate,
      mode: 0, //values.eventModeId,
      modelDetails: values.modeDetails,
      topic: values.topic,
      speakers: values.speakers,
      details: values.eventDetails,
      personOfContact: values.personOfContact,
      rules: values.rules,
      deadline: new Date(), //values.deadLine,
      community: values.community,
      capacity: values.capacity,
      type: 0, //values.typeId,
      tags: values.tags,
    };
    // try {
    //const response = await signupFormService.create(payload);
    console.log("payload from signup  ");
    console.log(payload);
    console.log("payload2 from signup  ");
    console.log(values.eventName);
    setSuccess(true);
    // } catch (err) {
    //   //   if (err.response && err.response.status === 400) {
    //   //     if (err.response.data.details[0] === "Phone Number already exists")
    //   //       setPhoneError(true);
    //   //     else if (err.response.data.details[0] === "Invalid Date Of Birth") {
    //   //       setdobError(true);
    //   //     } else setShowError(true);
    //   //     setError(err.response.data.details[0]);
    //   //   } else {
    //   //     throw err;
    //   //   }
    //   throw err;
    // }
  };

  console.log("success from signup " + success);

  return {
    handleSignup: handleSignup,
    success: success,
  };
};
