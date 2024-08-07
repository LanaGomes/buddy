import { useState } from "react";
import Button from "./Button";
import ModalSimulation from "./ModalSimulation";

function ExpenseSimulation({ apiInfo }) {
  const [showModal, setShowModal] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [checkBoxClicked, setCheckBoxClicked] = useState(true);
  const [addedExpenseSimulation, setAddedExpenseSimulation] = useState("");
  const [isAddedExpenseSimulationEmpty, setIsAddedExpenseSimulationEmpty] =
    useState(false);
  const [expenseType, setExpenseType] = useState("");
  const [isExpenseTypeEmpty, setIsExpenseTypeEmpty] = useState(false);

  const handleButtonClick = () => {
    let valid = true;

    if (addedExpenseSimulation === "") {
      setIsAddedExpenseSimulationEmpty(true);
      valid = false;
    } else {
      setIsAddedExpenseSimulationEmpty(false);
    }

    if (expenseType === "") {
      setIsExpenseTypeEmpty(true);
      valid = false;
    } else {
      setIsExpenseTypeEmpty(false);
    }

    if (!valid) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const formatedAddedExpenseSimulation = parseFloat(
      addedExpenseSimulation.replace(",", ".")
    );

    const addedExpenseResult =
      formatedAddedExpenseSimulation + apiInfo.total_mensal;

    setResultMessage(
      <>
        TOTAL CARTÃO previsto : R$
        {addedExpenseResult.toFixed(2).replace(".", ",")} <br /> <br />
        SALDO LIMITE previsto : R$
        {apiInfo.limite - formatedAddedExpenseSimulation}
      </>
    );
    setShowModal(true);
  };

  const handleYes = () => {
    setShowModal(false);
    console.log("user clicou sim");
  };

  const handleNo = () => {
    setShowModal(false);
    console.log("user clicou em não");
  };

  const handleCheckBox = () => {
    setCheckBoxClicked(!checkBoxClicked);
    console.log(checkBoxClicked);
  };

  const gerarOpcoes = () => {
    let opcoes = [];
    for (let index = 1; index <= 100; index++) {
      opcoes.push(
        <option className="text-blue-2" key={index} value={index}>
          {index}
        </option>
      );
    }

    return opcoes;
  };

  return (
    <div className="bg-blue-1 min-h-screen flex flex-col items-center justify-center p-4  text-white-whistestWhite ">
      <header className="text-2xl font-semibold mb-4">
        Simular Adição de Gasto
      </header>
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2">
            Valor Total Gasto
          </label>
          <input
            type="number"
            placeholder="Insira apenas números"
            onChange={(e) => {
              setAddedExpenseSimulation(e.target.value);
            }}
            className={`shadow appearance-none border rounded w-full py-2 px-3  text-blue-2  leading-tight focus:outline-none focus:shadow-outline ${
              isAddedExpenseSimulationEmpty
                ? "border-red-strong bg-red-light"
                : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tipo de Gasto
          </label>
          <input
            type="text"
            onChange={(e) => {
              setExpenseType(e.target.value);
            }}
            className={`shadow appearance-none border rounded w-full py-2 px-3  text-blue-2  leading-tight focus:outline-none focus:shadow-outline ${
              isExpenseTypeEmpty ? "border-red-strong bg-red-light" : ""
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2 ">
            Valor parcelado?
            <input
              h
              onClick={handleCheckBox}
              className="ml-2 leading-tight h-8 w-8"
              type="checkbox"
            />
          </label>
          <div className={checkBoxClicked ? "hidden" : "mt-2"}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Quantidade de parcelas
            </label>
            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-blue leading-tight focus:outline-none focus:shadow-outline">
              {gerarOpcoes()}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button buttonText="Simular" onClick={handleButtonClick} />
        </div>
      </form>
      <ModalSimulation
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleYes={handleYes}
        handleNo={handleNo}
        resultMessage={resultMessage}
      />
    </div>
  );
}

export default ExpenseSimulation;
