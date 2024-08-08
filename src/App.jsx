import "./App.css";
import ExpenseSimulation from "./Components/ExpenseSimulation";
import NavBar from "./Components/NavBar";
import SummaryBalance from "./Components/SummaryBalance";
import ExpensesGoalsLogic from "./Components/ExpensesGoalsLogic";
import GeneralSummary from "./Components/GeneralSummary";

function App() {
  return (
    <>
      <div className=" bg-white-almostWhite ">
        <GeneralSummary />
      </div>
    </>
  );
}

export default App;
