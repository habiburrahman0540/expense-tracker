import React from 'react'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
const Expenses = (props) => {
    return (
        <Card className="expenses">
             <ExpenseItem title ={props.items[0].title} price={props.items[0].price} date={props.items[0].date}/>
      <ExpenseItem title ={props.items[1].title} price={props.items[1].price} date={props.items[1].date}/>
      <ExpenseItem title ={props.items[2].title} price={props.items[2].price} date={props.items[2].date}/>
        </Card>
    )
}

export default Expenses
