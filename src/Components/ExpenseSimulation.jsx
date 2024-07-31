function ExpenseSimulation() {
  const gerarOpcoes = () => {
    let opcoes = [];
    for (let index = 1; index <= 100; index++) {
      opcoes.push(
        <option key={index} value={index}>
          {index}
        </option>
      );
    }

    return opcoes;
  };

  return (
    <div className=" bg-blue-1 max-h-full">
      <header className="text-2xl text-white-whistestWhite font-semibold py-2">
        Simular (adição gasto)
      </header>
      <form className="p-5 flex flex-col items-start">
        <label className="w-full">
          Valor Total Gasto
          <input className="m-3 p-1 rounded " required></input>
        </label>
        <label className="w-full">
          Valor Total Gasto
          <input className="m-3 p-1 rounded" required></input>
        </label>
        <label className="w-full text-left">
          Valor parcelado?
          <input
            className="p-1 ml-4 h-10 w-10 "
            required
            type="checkbox"
          ></input>
        </label>
        <label className="w-full text-left m-1">
          Quantidade de parcelas?
          <select className="w-15 p-2 mx-3 rounded focus:outline-none sm:text-sm">
            {gerarOpcoes()}
          </select>
        </label>
      </form>
    </div>
  );
}
export default ExpenseSimulation;
