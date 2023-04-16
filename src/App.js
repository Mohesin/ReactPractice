//  import ExpenseItem from "./components/Expenses/ExpenseItem";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_Expenses = [
  { title: "Car Insurance", amount: 71000, date: new Date(2022, 3, 23), id :1 },
  { title: "Car Color", amount: 3000, date: new Date(2022, 2, 23),id :3  },
  { title: "Bike Installemnt", amount: 10000, date: new Date(2021, 3, 20),id :2 },
  { title: "Bike Tyre", amount: 5800, date: new Date(2021, 2, 20),id :2 },
 
];

function App() {

  const [expenses , setExpenses] = useState(DUMMY_Expenses)

  const addExpenseHandler = expense =>{
    // console.log('IN APP JS'+  {expense})
    setExpenses(prevExpense=>{
     return [expense, ...prevExpense];
    })
  }

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler}/>
      <Expenses AllExpenses={expenses}></Expenses>
      
    </div>
  );
}

export default App;
