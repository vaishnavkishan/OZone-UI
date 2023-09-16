import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Button from "@mui/material/Button";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
} from "@mui/material";

import { useState } from "react";
import RegistrationForm from "./Registrationform";

function EventDetails() {
  ///
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log({ name, email });
      // TODO: Submit the form data to the server
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  ///

  ////

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegistration = (formData) => {
    console.log(formData.name);
    // TODO: Submit the form data to the server
  };

  ////
  const { eventId } = useParams();
  //   const id = eventId;
  //   const {
  //     data: event,
  //     isLoading,
  //     error,
  //   } = useFetch(`http://localhost:5160/Events/${id}`);

  const event = {
    id: "9a17cb35-3f68-4ea3-a836-7840474a87b2",
    name: "First Event",
    date: "2023-09-16T06:35:25.471",
    mode: 0,
    modelDetails: "joining info",
    topic: "Demo topic",
    speakers: "ozone",
    details: "This is a demo topic, anything will be discussed here",
    personOfContact: "kishan.vaishnav@thoughtworks.com",
    rules: "Everyone must come in party wear",
    deadline: "2023-09-18T06:35:25.471",
    community: "fun@thoguhtworks.com",
    capacity: 123,
    type: 0,
    tags: "fun, devs",
  };

  //   if (error) {
  //     return <div className="error">{error}</div>;
  //   }

  //   if (isLoading) {
  //     return <div className="loading">Loading...</div>;
  //   }
  return (
    <div>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4">{event.name}</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="event details table">
            <TableBody>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>
                  {new Date(event.date).toLocaleDateString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mode</TableCell>
                <TableCell>{event.mode}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Model Details</TableCell>
                <TableCell>{event.modelDetails}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Topic</TableCell>
                <TableCell>{event.topic}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Speakers</TableCell>
                <TableCell>{event.speakers}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Details</TableCell>
                <TableCell>{event.details}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Person of Contact</TableCell>
                <TableCell>{event.personOfContact}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rules</TableCell>
                <TableCell>{event.rules}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deadline</TableCell>
                <TableCell>
                  {new Date(event.deadline).toLocaleDateString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Community</TableCell>
                <TableCell>{event.community}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Capacity</TableCell>
                <TableCell>{event.capacity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{event.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tags</TableCell>
                <TableCell>{event.tags}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="solid"
            sx={{ backgroundColor: "#f1356d" }}
            onClick={handleOpen}
          >
            Register
          </Button>
          <RegistrationForm
            open={open}
            onClose={handleClose}
            onSubmit={handleRegistration}
          />
        </Box>
      </Paper>
    </div>
  );
}

export default EventDetails;
