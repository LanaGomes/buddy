import React from "react";

const ModalSimulation = ({
  show,
  handleClose,
  handleYes,
  handleNo,
  resultMessage,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0  text-blue-2 bg-blue-2 bg-opacity-80 flex items-center justify-center">
      <div className="bg-white-hotWhite p-6 rounded-md shadow-md text-center">
        <h2 className="text-xl  font-bold mb-4">Resultado</h2>
        <p className="mb-4">{resultMessage}</p>
        <p className="mb-4 font-semibold">Você deseja adicionar este gasto?</p>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-radiantGreen text-white rounded-md hover:bg-blue-700"
            onClick={handleYes}
          >
            Sim
          </button>
          <button
            className="px-4 py-2 bg-red text-white rounded-md hover:bg-red-700"
            onClick={handleNo}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSimulation;
