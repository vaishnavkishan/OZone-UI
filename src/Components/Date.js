import React from "react";
import "./Date.css";

function Date(props) {
  const dateParts = props.date.split("T")[0].split("-");
  const timeParts = props.date.split("T")[1].split(":");
  const time = timeParts[0] + ":" + timeParts[1];
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  return (
    <div className="date">
      <div className="expense-date">
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
      </div>
      <div className="event-time">
        <div className="et">{time}</div>
      </div>
    </div>
  );
}

export default Date;
