import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const SaveNewExpenseData = (enteredExpenseData) => {
        //  use the spread operation to add the new data to the existing array
        //  added id to the data using math.random()
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    };

    return (
        // add a prop, onSaveNewExpenseData to pull in function as a value
        <div className='new-expense'>
            <ExpenseForm onSaveNewExpenseData={SaveNewExpenseData}/>
        </div>
    );
};

export default NewExpense;
