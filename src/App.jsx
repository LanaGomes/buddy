import "./App.css";
import ExpenseSimulation from "./Components/ExpenseSimulation";
import NavBar from "./Components/NavBar";
import SummaryBalance from "./Components/SummaryBalance";

function App() {
  return (
    <>
      <div className=" bg-white-almostWhite ">
        <SummaryBalance />
        <ExpenseSimulation />
      </div>
    </>
  );
}

export default App;
