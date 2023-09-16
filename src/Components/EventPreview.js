// import React from "react";

// function Event({ event }) {
//   return (
//     <div className="blog-preview">
//       <h2>{event.name}</h2>
//       <p>Written by {event.speakers}</p>
//     </div>
//   );
// }

// export default Event;

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Date from "./Date";

export default function EventPreview({ event, kind }) {
  const isPastEvent = kind === "past";
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: { xs: "auto", sm: "initial" },
        padding: { xs: 1, sm: 1.5 },
        boxShadow: "-2.5px 1.5px rgba(0, 0.7, 0.3, 0.3)",
        borderRadius: "lg",
      }}
    >
      {/* <Box
        sx={{
          position: "absolute",
          display: "block",
          width: "1px",
          bgcolor: "warning.300",
          left: "500px",
          top: "-24px",
          bottom: "-24px",
          "&::before": {
            top: "4px",
            content: '"vertical"',
            display: "block",
            position: "absolute",
            right: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
          "&::after": {
            top: "4px",
            content: '"horizontal"',
            display: "block",
            position: "absolute",
            left: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
        }}
      /> */}
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          [`& > *`]: {
            "--stack-point": "500px",
            minWidth:
              "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
          },
          // make the card resizable for demo
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={35} sx={{ minWidth: 182 }}>
          <Date date={event.date} />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {event.name}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Speaker: {event.speakers}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Details: {event.details.slice(0, 25) + "..."}
          </Typography>
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Total slots available
              </Typography>
              <Typography fontWeight="lg">{event.capacity}</Typography>
            </div>
            <Button variant="solid" sx={{ backgroundColor: "#f1356d" }}>
              Details
            </Button>
            <Button variant="solid" sx={{ backgroundColor: "#f1356d" }}>
              {isPastEvent ? "Download Artifacts" : "Register"}
            </Button>
          </Sheet>
          {/* <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box> */}
        </CardContent>
      </Card>
    </Box>
  );
}
