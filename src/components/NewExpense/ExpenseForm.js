import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let currentDate = new Date().toISOString().split("T")[0];
   
  
   
  // CASE 1--
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEenteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // CASE--2 and Case 3
  //  const [userInput, setUserInput] = useState({
  //     enteredtitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (e) => {
    //CASE --1
    setEnteredtitle(e.target.value);
    //Case --2  setUserInput({...userInput, enteredtitle : e.target.value})
    /*case3*/
    //  setUserInput((prevState) => {
    //   return { ...prevState, enteredtitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    //CASE --1
    setEenteredAmount(e.target.value);
    //Case --2  setUserInput({...userInput, enteredAmount : e.target.value})
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    //CASE --1
    setEnteredDate(e.target.value);
    //Case --2  setUserInput({...userInput, enteredDate : e.target.value})
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
     title : enteredtitle,
     amount :enteredAmount,
     date : new Date(enteredDate)
    }

   // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
   // alert('Expense Added')
    setEenteredAmount('');
    setEnteredtitle('');
    setEnteredDate('');
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value = {enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
            value = {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={currentDate}
             value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
