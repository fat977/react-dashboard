import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function DashboardCalendar() {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
    console.log("Selected Date:", date);
  };

  return (
    <div className="calender bg-white py-5 rounded-2" style={{  margin: "0 auto", textAlign: "center" }}>
      <h3><FontAwesomeIcon className="me-2" icon={faCalendar} />Calendar</h3>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
