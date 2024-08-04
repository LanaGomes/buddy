function ResultCard({ saldoFinal, totalTipoGasto }) {
  return (
    <>
      <div className="border-s-8 border-x border-y border-radiantGreen text-left p-3 my-1 w-1/2 bg-white-whistestWhite shadow-lg">
        <header className="text-2xl font-bold text-blue-2">{saldoFinal}</header>
        <label className="text-1xl text-darkgreen">{totalTipoGasto}</label>
      </div>
    </>
  );
}
export default ResultCard;
