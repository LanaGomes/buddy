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
    <div className=" bg-blue-1 max-h-full text-base p-2 h-full ">
      <header className="text-2xl text-white-whistestWhite font-semibold py-2 ">
        Simular (adição gasto)
      </header>
      <form className="p- flex flex-col text-center">
        <label className="w-full text-white-whistestWhite">
          Valor Total Gasto
          <input
            placeholder="Insira apenas números"
            type="number"
            onChange={(e) => {
              setAddedExpenseSimulation(e.target.value);
            }}
            className={`text-blue-2 m-3 p-1 rounded w-1/2 ${
              isAddedExpenseSimulationEmpty
                ? "bg-red-light border-2  border-red-strong"
                : ""
            }`}
          ></input>
        </label>
        <label className="w-full text-white-whistestWhite">
          Tipo de Gasto
          <input
            onChange={(e) => {
              setExpenseType(e.target.value);
            }}
            className={`text-blue-2 m-3 p-1 rounded w-1/2 ${
              isExpenseTypeEmpty
                ? "bg-red-light border-2 border-red-strong"
                : ""
            }`}
          ></input>
        </label>
        <div className="flex justify-around p-2 mt-2 ">
          <label className="text-white-whistestWhite flex items-center  ">
            Valor parcelado?
            <input
              onClick={handleCheckBox}
              className="p-1 h-10 w-10 ml-2 "
              required
              type="checkbox"
            ></input>
          </label>
          <div className={checkBoxClicked ? "hidden" : ""}>
            <label className=" text-white-whistestWhite flex items-center ">
              Quantidade de parcelas?
              <select className=" text-blue-2 w-15 p-2 mx-3 rounded focus:outline-none sm:text-sm">
                {gerarOpcoes()}
              </select>
            </label>
          </div>
        </div>
      </form>
      <Button buttonText="Simular" onClick={handleButtonClick} />
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
