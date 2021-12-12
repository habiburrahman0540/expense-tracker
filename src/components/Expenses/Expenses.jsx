import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
    const [filterYear,setFilterYear] = useState('2021');
    const filterChangeHandler =(selectedYear)=>{
        setFilterYear(selectedYear)
    }
    const filterExpensesData = props.items.filter(exp=>{
        return exp.date.getFullYear().toString() === filterYear
    })
  
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filterExpensesData} />
            
        </Card>
    )
}

export default Expenses
