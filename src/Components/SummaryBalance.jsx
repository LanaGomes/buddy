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
    <div className="flex flex-col justify-center pb-8 pt-8  ">
      <main className=" bg-white-whistestWhite flex justify-around text-2xl p-2  mb-5 mx-12 items-center border-2 border-blue-2 rounded ">
        <div className="flex justify-center w-1/2 cursor-pointer ">
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
      <ResultCard totalCartao="R$1520" totalTipoGasto="Total Cartão" />
      <ResultCard totalCartao="+ R$800" totalTipoGasto="Total Saldo Meta" />

      <a
        className="text-yellow underline underline-offset-2 text-2xl"
        href="https://www.youtube.com/"
      >
        Ver mais
      </a>
    </div>
  );
}

export default SummaryBalance;
