import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarLogo from "../Images/calendarLogo.png";
import ResultCard from "./ResultCard";

function SummaryBalance({ startDate, setStartDate, apiInfo }) {
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <div className="flex flex-col justify-center pb-4 ">
      <main className=" bg-white-whistestWhite flex justify-around text-3xl p-4 mb-6 mx-12 mt-12 items-center border-2 border-blue-2 rounded ">
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
          className=" text-start font-bold  text-blue-2 w-11/12  "
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
      </main>
      <section className="flex  gap-6 mx-6 mb-8">
        <ResultCard
          saldoFinal={"R$" + apiInfo?.total_mensal ?? "N/A"}
          totalTipoGasto="Total Cartão"
        />
        <ResultCard
          saldoFinal={"R$" + apiInfo?.limite ?? "N/A"}
          totalTipoGasto="Saldo Limite"
        />
      </section>

      <a
        className="text-blue-2 underline underline-offset-2 text-2xl "
        href="https://www.youtube.com/"
      >
        Ver mais
      </a>
    </div>
  );
}

export default SummaryBalance;
