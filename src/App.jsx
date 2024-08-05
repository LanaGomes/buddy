import "./App.css";
import ExpenseSimulation from "./Components/ExpenseSimulation";
import NavBar from "./Components/NavBar";
import SummaryBalance from "./Components/SummaryBalance";
import ExpensesGoalsLogic from "./Components/ExpensesGoalsLogic";

function App() {
  return (
    <>
      <div className=" bg-white-almostWhite ">
        <ExpensesGoalsLogic />
        {/* <SummaryBalance />
        <ExpenseSimulation /> */}
      </div>
    </>
  );
}

export default App;
