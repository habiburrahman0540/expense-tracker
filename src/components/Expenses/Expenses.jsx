import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
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
        <li>
        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses ={filterExpensesData}/>
            <ExpensesList items={filterExpensesData} />
            
        </Card>
        </li>
    )
}

export default Expenses
