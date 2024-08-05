import { useEffect, useState } from "react";
import SummaryBalance from "./SummaryBalance";

function ExpensesGoalsLogic() {
  const [startDate, setStartDate] = useState(new Date());
  const [apiInfo, setApiInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedDate = startDate.toISOString().slice(0, 7);
        const response = await fetch(
          `https://buddy-backend-silk.vercel.app/custos?data=${formattedDate}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setApiInfo(result);
        console.log(apiInfo);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [startDate]);

  return (
    <SummaryBalance
      startDate={startDate}
      setStartDate={setStartDate}
      apiInfo={apiInfo}
    />
  );
}

export default ExpensesGoalsLogic;
