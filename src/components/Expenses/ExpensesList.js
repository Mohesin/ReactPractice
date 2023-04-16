import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.selectedExpenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        Found No Expenses for selected year.!
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.selectedExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
