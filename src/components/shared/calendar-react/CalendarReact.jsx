import React, { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarReact.css";

const CalendarReact = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar calendarType="US" onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarReact;
