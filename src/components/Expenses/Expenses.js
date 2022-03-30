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

  // console.log(props);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
        <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
        <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
        <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
        <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}></ExpenseItem>
      </Card>
    </div>
  )
}


export default Expenses;
