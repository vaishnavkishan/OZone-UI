import React from "react";
import "./Date.css";

function Date(props) {
  //   const strdt = props.date;
  //   const dt = new Date(strdt);
  //   const month = props.Date.toLocaleString("en-US", { month: "long" });
  //   const year = dt.year;
  //   const day = dt.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      {/* <div className="expense-date__month">{month}</div> */}
      {/* <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div> */}
      <div className="expense-date__month">{props.date}</div>
    </div>
  );
}

export default Date;
