import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
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


  // use map to iterate through the array of filteredExpenses items
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
        {/* use ternary condition to determine a condition of a value */}
        {filteredExpenses.length === 0 ? (<p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  )
}


export default Expenses;
