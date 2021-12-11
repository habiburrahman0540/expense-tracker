import React,{useState} from 'react'
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const submitHandler =(e)=>{
        e.preventDefault();
        const expenseData ={
            title:title,
            price:price,
            date: new Date(date)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setPrice('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title :</label>
                    <input type="text" id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="price">Price :</label>
                    <input type="text" id='price' min='0.01' step='0.01' value={price} onChange={(e)=>setPrice(e.target.value)} />                   
                </div> 
                <div className="new-expense__control">
                    <label htmlFor="date">Date :</label>
                    <input type="date" id='date'  min='2019-01-01' max='2022-12-31' value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>     
            </div>  
            <div className="new-expense__action">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
