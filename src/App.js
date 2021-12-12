
import React,{useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYDATA = [
  {
    id:'e1',
    title:"Car Insurance",
    price: 285.00,
    date: new Date(2020 ,2,28)
  },
  {
    id:'e2',
    title:"Food Expense",
    price: 200.00,
    date: new Date(2021 ,5,18)
  },
  {
    id:'e3',
    title:"Rent Expense",
    price: 300.00,
    date: new Date(2021 ,8,10)
  },
];

const App = () =>{
  const [expenses, setExpenses] = useState(DUMMYDATA)
  const addExpenseHandler =expense=>{
    setExpenses((previousExpenses)=>{
      return [expense, ...previousExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
