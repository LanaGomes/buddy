import { useState } from "react";
import Button from "./Button";
import ModalSimulation from "./ModalSimulation";

function ExpenseSimulation() {
  const [showModal, setShowModal] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [checkBoxClicked, setCheckBoxClicked] = useState("true");
  const [addedExpenseSimulation, setAddedExpenseSimulation] = useState("");

  const handleButtonClick = () => {
    const addedExpenseResult =
      addedExpenseSimulation - setResultMessage("Resultado da simulação");
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
            onChange={(e) => {
              setAddedExpenseSimulation(e.target.value);
            }}
            className=" text-blue-2 m-3 p-1 rounded w-1/2 "
            required
          ></input>
        </label>
        <label className="w-full text-white-whistestWhite">
          Tipo de Gasto
          <input
            className=" text-blue-2 m-3 p-1 rounded w-1/2 "
            required
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
