import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarLogo from "../Images/calendarLogo.png";
import ResultCard from "./ResultCard";

function SummaryBalance() {
  const [startDate, setStartDate] = useState(new Date());
  const [apiInfo, setApiInfo] = useState(null);
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    datePickerRef.current.setOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedDate = startDate.toISOString().slice(0, 7);
        const response = await fetch(
          `https://buddy-backend-silk.vercel.app/custos?data=${formattedDate}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setApiInfo(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [startDate]);

  return (
    <div className="flex flex-col justify-center pb-4 ">
      <main className=" bg-white-whistestWhite flex justify-around text-3xl p-4 mb-6 mx-12 items-center border-2 border-blue-2 rounded ">
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
      <section className="flex  gap-6 mx-4 mb-8">
        <ResultCard
          saldoFinal={"R$" + apiInfo?.total_mensal ?? "N/A"}
          totalTipoGasto="Total Cartão"
        />
        <ResultCard
          saldoFinal={"R$" + apiInfo?.limite ?? "N/A"}
          totalTipoGasto="Total Saldo Meta"
        />
      </section>

      <a
        className="text-radiantGreen underline underline-offset-2 text-2xl mb-4"
        href="https://www.youtube.com/"
      >
        Ver mais
      </a>
    </div>
  );
}

export default SummaryBalance;
