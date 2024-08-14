import React from "react";
import ExpenseDetail from "./ExpenseDetail";

const GeneralSummary = () => {
  const data = [
    {
      id: 1,
      monthYear: "08/2024",
      valorParceladoTotal: 25,
      valorRecorrenteTotal: 100,
      valorVistaTotal: 50,
      valorCartaoTotal: 300,
      valorSaldoMeta: 200,
    },
    {
      id: 2,
      monthYear: "07/2024",
      valorParceladoTotal: 35,
      valorRecorrenteTotal: 100,
      valorVistaTotal: 50,
      valorCartaoTotal: 300,
      valorSaldoMeta: 200,
    },
    {
      id: 3,
      monthYear: "06/2024",
      valorParceladoTotal: 32,
      valorRecorrenteTotal: 100,
      valorVistaTotal: 50,
      valorCartaoTotal: 300,
      valorSaldoMeta: 200,
    },
    {
      id: 4,
      monthYear: "05/2024",
      valorParceladoTotal: "valor parcelado",
      valorRecorrenteTotal: 100,
      valorVistaTotal: "A vista",
      valorCartaoTotal: "total Cartao",
      valorSaldoMeta: "saldo Meta",
    },
  ];

  return (
    <>
      <header className="py-2 bg-blue-1 text-2xl text-white-whistestWhite font-semibold">
        Resumo Geral
      </header>{" "}
      <div className="overflow-x-auto drop-shadow-xl ">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                className=" sticky left-0 z-10 px-6 py-2 bg-gray-50 text-center text-xs font-medium text-blue-2
               uppercase tracking-wider"
              ></th>
              {data.map((date) => (
                <th
                  key={date.monthYear}
                  className=" border-l-4 borde-blue-1 px-6 py-1 text-center text-lg font-medium text-blue-1 uppercase tracking-wider"
                >
                  {date.monthYear}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-light">
            {/* Linha de Total Parcelado */}
            <tr>
              <td className=" sticky left-0 z-10 px-1 py-1 whitespace-nowrap text-sm font-medium text-blue-2 bg-white-whistestWhite">
                Total Parcelado
              </td>
              {data.map((item) => (
                <td
                  key={`${item.monthYear}-parcelado`}
                  className="px-2 py-2 whitespace-nowrap text-sm text-blue-2"
                >
                  {`R$ ${item.valorParceladoTotal}`}
                </td>
              ))}
            </tr>
            {/* Linha de Valor Recorrente */}
            <tr>
              <td className="sticky left-0 z-10 px-6 py-4 whitespace-nowrap text-sm font-medium  text-blue-2 bg-white-whistestWhite">
                Total Recorrente
              </td>
              {data.map((item) => (
                <td
                  key={`${item.monthYear}-recorrente`}
                  className="px-2 py-2 whitespace-nowrap text-sm text-blue-2"
                >
                  {`R$ ${item.valorRecorrenteTotal}`}
                </td>
              ))}
            </tr>
            {/* Linha de Valor à Vista */}
            <tr>
              <td className="sticky left-0 z-10 px-2 py-2 whitespace-nowrap text-sm font-medium text-blue-2 bg-white-whistestWhite">
                Total à Vista
              </td>
              {data.map((item) => (
                <td
                  key={`${item.monthYear}-vista`}
                  className="px-2 py-2 whitespace-nowrap text-sm text-blue-2"
                >
                  {`R$ ${item.valorVistaTotal}`}
                </td>
              ))}
            </tr>
            {/* Linha de Valor Cartão */}
            <tr>
              <td className="sticky left-0 z-10 px-2 py-2 whitespace-nowrap text-sm font-medium text-blue-2 bg-white-whistestWhite">
                Total Cartão
              </td>
              {data.map((item) => (
                <td
                  key={`${item.monthYear}-cartao`}
                  className="px-2 py-2 whitespace-nowrap text-sm text-blue-2"
                >
                  {`R$ ${item.valorCartaoTotal}`}
                </td>
              ))}
            </tr>
            {/* Linha de Saldo Meta */}
            <tr>
              <td className="sticky left-0 z-10 px-2 py-2 whitespace-nowrap text-sm font-medium text-blue-2 bg-white-whistestWhite">
                Total Saldo Meta
              </td>
              {data.map((item) => (
                <td
                  key={`${item.monthYear}-meta`}
                  className="px-2 py-2 whitespace-nowrap text-sm text-blue-2"
                >
                  {`R$ ${item.valorSaldoMeta}`}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <ExpenseDetail />
    </>
  );
};

export default GeneralSummary;
