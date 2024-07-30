function ResultCard({ totalCartao, totalTipoGasto }) {
  return (
    <>
      <div className="border-s-8 border-pink text-left px-3 pt-3 pb-1  mx-12 my-3 bg-white-whistestWhite">
        <header className="text-4xl">{totalCartao}</header>
        <label className="text-2xl text-pink">{totalTipoGasto}</label>
      </div>
    </>
  );
}
export default ResultCard;
