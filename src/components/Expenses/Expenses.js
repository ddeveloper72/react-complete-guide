import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

  // 
  const filterChangeHandler = selectedYear => {

    // receive value from ExpensesFilter
    console.log('Expenses.js');
    console.log(selectedYear);
  }

  // console.log(props);
  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler}/>
      <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
      <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
      <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
      <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}></ExpenseItem>
    </Card>
    </div>
  )
}


export default Expenses;
