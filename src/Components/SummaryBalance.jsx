import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarLogo from "../Images/calendarLogo.png";
import ResultCard from "./ResultCard";

function SummaryBalance() {
  const [startDate, setStartDate] = useState(new Date());
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <div className="flex flex-col justify-center  ">
      <main className=" flex justify-around text-2xl p-2 m-7 mx-14 items-center border-2 border-blue-2 rounded ">
        <div className="flex justify-center w-1/2 cursor-pointer">
          <img
            className="h-10 opacity-60"
            src={calendarLogo}
            alt="Icone de calendario"
            onClick={handleIconClick}
          />
        </div>
        <DatePicker
          ref={datePickerRef}
          className=" text-start font-bold  text-blue-2 w-11/12 "
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
      </main>
      <ResultCard />
    </div>
  );
}

export default SummaryBalance;
