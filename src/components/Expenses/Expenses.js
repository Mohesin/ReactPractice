import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.AllExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
     <ExpenseChart expenses={filteredExpenses} ></ExpenseChart>
      <ExpensesList selectedExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
