import Button from "./Button";

function ExpenseDetail() {
  return (
    <div className="bg-white-whistestWhite pt-4">
      <header className="mt-2 mb-2 text-blue-1 text-2xl font-bold">
        Detalhes Saídas
      </header>
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
      <section></section>
    </div>
  );
}
export default ExpenseDetail;
