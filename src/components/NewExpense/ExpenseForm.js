import React, { useState } from 'react';
import './ExpenseForm.css';

// build a form for user inputs

const ExpenseForm = (props) => {
    // individual state slice method
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // save the new title
    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    // save the new Amount
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    // save the new Date
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // form submit handler
    const submitHandler = (event) => {
        event.preventDefault();  // stop page reloading

        // create an expense data object
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // call props function from NewExpense and execute it here.
        props.onSaveNewExpenseData();

        // clear the inputs on the form using 2-way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        // clear form inputs using 2-way binding on the values
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={TitleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;
