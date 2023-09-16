import { Dialog, IconButton, Snackbar } from "@material-ui/core";
import React from "react";
import styles from "../user/styles/changePasswordConfrimationStyles";
import Alert from "@material-ui/lab/Alert";
import { useNavigate } from "react-router-dom";

const SignupConfirmation = ({ history, open, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/events/upcoming");
  };

  const classes = styles();

  return (
    <>
      <Dialog className={classes.dialogBase} open={open} onClose={handleClose}>
        <Snackbar
          open={open}
          onClose={handleClose}
          data-testid="alert"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Signup successful!
          </Alert>
        </Snackbar>
      </Dialog>
    </>
  );
};
export default SignupConfirmation;
