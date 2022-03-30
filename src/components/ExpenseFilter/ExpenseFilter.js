// import React, {useState} from 'react';
import './ExpenseFilter.css';


const ExpenseFilter = (props) => {

    const changeHandler = (e) => {
        // use onChange to detect the value selected & forward to Expenses.js
        props.onChangeFilter(e.target.value);
    };


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={changeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>

                </select>
            </div>
        </div>
    );
};


export default ExpenseFilter;