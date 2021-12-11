

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expenses = [
  {
    id:'e1',
    title:"Car Insurance",
    price: 285.00,
    date: new Date(2021 ,2,28)
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
]
const App = () =>{
  const addExpenseHandler =expense=>{
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
