function ResultCard({ saldoFinal, totalTipoGasto }) {
  return (
    <>
      <div className="border-s-8 border-x border-y border-darkgreen text-left p-3 my-1 w-1/2 bg-white-whistestWhite shadow-lg">
        <header className="text-4xl">{saldoFinal}</header>
        <label className="text-2xl text-darkgreen">{totalTipoGasto}</label>
      </div>
    </>
  );
}
export default ResultCard;
