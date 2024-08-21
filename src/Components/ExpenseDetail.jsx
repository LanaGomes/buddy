import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarLogo from "../Images/calendarLogo.png";
import { useState, useEffect, useRef } from "react";
import loadingGif from "../Images/loadingGif.gif";
import deleteLogo from "../Images/deleteLogo.png";

function ExpenseDetail() {
  const [startDate, setStartDate] = useState(new Date());
  const [apiInfo, setApiInfo] = useState(null);
  const [clickedButtonValue, setClickedButtonValue] = useState("parcelados");

  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    datePickerRef.current.setOpen(true);
  };

  const handleOnclickTab = (e) => {
    setClickedButtonValue(e.target.value);
  };

  const conjuntoParcelado = [
    {
      id: 1,
      valorParcela: 100,
      parcelaNum: 25,
      qtdeParcelas: 6,
      ultimaParcelaEm: "10/2024",
      tipoGasto: "Mercado",
    },
    {
      id: 2,
      valorParcela: 100,
      parcelaNum: 25,
      qtdeParcelas: 6,
      ultimaParcelaEm: "10/2024",
      tipoGasto: "Outros",
    },
    {
      id: 3,
      valorParcela: 100,
      parcelaNum: 1,
      qtdeParcelas: 5,
      ultimaParcelaEm: "10/2024",
      tipoGasto: "Outros",
    },
    {
      id: 4,
      valorParcela: 100,
      parcelaNum: 2,
      qtdeParcelas: 6,
      ultimaParcelaEm: "09/2024",
      tipoGasto: "Ifood",
    },
  ];

  const conjuntoRecorrente = [
    {
      id: 1,
      valorRecorrente: 220,
      tipoGasto: "Mercado",
    },
    {
      id: 2,
      valorRecorrente: 149,
      tipoGasto: "Odin",
    },
  ];

  const conjuntoAvista = [
    {
      id: 1,
      valorAvista: "08/2024",
      tipoGasto: "Farmácia",
    },
    {
      id: 2,
      valorAvista: "08/2024",
      tipoGasto: "Farmácia",
    },
  ];

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
        setApiInfo(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [startDate]);

  return (
    <div className="bg-white-whistestWhite ">
      <header className="mt-4 mb-2 text-white-whistestWhite bg-blue-1 p-2 text-2xl font-bold">
        Detalhes Saídas
      </header>

      <section className="bg-white-whistestWhite flex justify-around mt-2 text-1xl p-1 mb-1 mx-20 items-center border-2 border-blue-2 rounded">
        <div className="flex justify-center w-1/2 cursor-pointer ">
          {apiInfo === null ? (
            <div className="flex justify-center items-center">
              <img src={loadingGif} alt="loading" />
            </div>
          ) : (
            <img
              className="h-10 opacity-60"
              src={calendarLogo}
              alt="Icone de calendario"
              onClick={handleIconClick}
            />
          )}
        </div>
        <DatePicker
          ref={datePickerRef}
          className="text-start font-bold text-blue-2 w-11/12"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
      </section>

      <section>
        <nav className="flex justify-evenly">
          <button
            value="parcelados"
            onClick={handleOnclickTab}
            className={`text-base text-white-whistestWhite py-3 w-full mt-4 ${
              clickedButtonValue === "parcelados"
                ? "bg-red-marsala border-y-2 border-red-marsalaDarker"
                : "bg-gray-medium  text-gray-light"
            }`}
          >
            Parcelados
          </button>
          <button
            value="recorrentes"
            onClick={handleOnclickTab}
            className={`text-base text-white-whistestWhite w-full py-3 mt-4  ${
              clickedButtonValue === "recorrentes"
                ? "bg-red-purple border-y-2 border-red-marsalaDarker"
                : "bg-gray-medium  text-gray-light"
            }`}
          >
            Recorrentes
          </button>
          <button
            value="aVista"
            onClick={handleOnclickTab}
            className={`text-base text-white-whistestWhite py-3 w-full mt-4   ${
              clickedButtonValue === "aVista"
                ? "bg-blue-4 border-y-2 border-blue-2"
                : "bg-gray-medium text-gray-light"
            }`}
          >
            Á vista
          </button>
        </nav>

        <section>
          {clickedButtonValue === "parcelados" && (
            <table className="w-full">
              <thead className="bg-red-marsala">
                <tr className="text-white-whistestWhite divide-x-2">
                  <th className="p-1">Valor Parcela</th>
                  <th className="p-1">Parcela</th>
                  <th className="p-1">Última Parcela em</th>
                  <th className="p-1">Tipo de Gasto</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {conjuntoParcelado.map((item) => (
                  <tr key={item.id}>
                    <td>{item.valorParcela}</td>
                    <td>{item.parcelaNum}</td>
                    <td>{item.ultimaParcelaEm}</td>
                    <td className="flex justify-center">
                      {item.tipoGasto}{" "}
                      <img className="h-10w-10" src={deleteLogo}></img>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {clickedButtonValue === "recorrentes" && (
            <table className="w-full">
              <thead className="bg-red-purple w-full">
                <tr className="text-white-whistestWhite divide-x-2">
                  <th className="p-1">Valor Recorrente</th>
                  <th className="p-1">Tipo de Gasto</th>
                </tr>
              </thead>
              <tbody>
                {conjuntoRecorrente.map((item) => (
                  <tr key={item.id}>
                    <td>{item.valorRecorrente}</td>
                    <td>{item.tipoGasto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {clickedButtonValue === "aVista" && (
            <table className="w-full">
              <thead className="bg-blue-4 ">
                <tr className="text-white-whistestWhite divide-x-2">
                  <th className="p-1">Data</th>
                  <th className="p-1">Tipo de Gasto</th>
                </tr>
              </thead>
              <tbody>
                {conjuntoAvista.map((item) => (
                  <tr key={item.id}>
                    <td>{item.valorAvista}</td>
                    <td>{item.tipoGasto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </section>
    </div>
  );
}

export default ExpenseDetail;
