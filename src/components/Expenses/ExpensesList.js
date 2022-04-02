import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

    // declare a constant for expenses content
    let expensesContent = '';

    // use logic to iterate through the array of filteredExpenses items
    if (props.item.length > 0) {
        expensesContent = props.item.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }
    else {
        expensesContent = <h2 className='expenses-list__fallback'>Found no Expenses.</h2>;
    }

    return <ul className='expenses-list'>
        {expensesContent}
    </ul>

};

export default ExpensesList;