import Button from "./Button";

function ExpenseDetail() {
  return (
    <div className="bg-white-whistestWhite pt-4">
      <header>Detalhes Saídas</header>
      <nav className="flex justify-between">
        <Button
          aditionalClassNames="mx-2 text-white-whistestWhite bg-red-marsala"
          buttonText="Parcelados"
        />
        <Button
          aditionalClassNames="mx-2  text-white-whistestWhite bg-blue-4"
          buttonText="Recorrentes"
        />
        <Button
          aditionalClassNames="mx-2  text-white-whistestWhite bg-red-purple"
          buttonText="Á vista"
        />
      </nav>
    </div>
  );
}
export default ExpenseDetail;
