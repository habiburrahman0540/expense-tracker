import React from 'react'
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"
const ExpensesList = (props) => {
    if(props.items.length === 0){
        return <h2 className='expense-list__fallback'>No expenses found. </h2>
    }
    return (
        <ul className='expense-list'>
             {props.items.map(expense=><ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date}/>)
}
        </ul>
    )
}

export default ExpensesList
