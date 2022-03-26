import React from 'react';
import './ExpenseForm.css';

// build a form for user inputs

const ExpenseForm = () => {
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense___control'>
                <label>Title</label>
                <input type='text' />
            </div>
            <div className='new-expense___control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' />
            </div>
        </div>
    </form>
}


export default ExpenseForm;
