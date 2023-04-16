import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, SetisEditing] = useState(false);

  const SaveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.floor(Math.random() * 1000 + 1).toString(),
    };
    //console.log(expenseData);
    props.onNewExpense(expenseData);
  };

  const startEditHandler = () => {
    SetisEditing(true);
  };

  const stopEditingHandler = () =>{
    SetisEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={startEditHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm onCancel={stopEditingHandler}  onSaveExpenseData={SaveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
