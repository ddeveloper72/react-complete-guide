import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

  // define initial state and filtered state
  const [filteredYear, setFilteredYear] = useState('2020')

  // receive value from ExpensesFilter
  const filterChangeHandler = selectedYear => {

    // set filtered year to the selectedYear which was received a a parameter
    setFilteredYear(selectedYear);
  };

  // add filter for filteredYear
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // refer to a constant to get logic
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
        <ExpensesList item={filteredExpenses}/>
      </Card>
    </div>
  )
}


export default Expenses;
