import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 2, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 220.00,
      date: new Date(2022, 3, 20),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 1, 12),
    },
  ];

  // function for collecting expense data from  ExpenseForm
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expenses);
  }

  // Standard Code

  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, { item: expenses })
  // );


  // JSX Code

  // add function pointer for addExpenseHandler
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
