import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {

    // define specific date elements as constants
    const month = props.date.toLocaleString('ie-EU', { month: 'long' });
    const day = props.date.toLocaleString('ie-EU', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

export default ExpenseDate;