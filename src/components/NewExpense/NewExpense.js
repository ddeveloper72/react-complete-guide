import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import '../NewExpense/NewExpense.css';

const NewExpense = (props) => {

    // create a variable name for DOM object add expense button || expenseForm
    let SelectNewExpense = '';

    // get initial state of expense form which is not shown- false
    const [addingNewExpense, setAddNewExpense] = useState(false);

    const SaveNewExpenseData = (enteredExpenseData) => {
        //  use the spread operation to add the new data to the existing array
        //  added id to the data using math.random()
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    // call and addNewExpenseHandler method to change the setAddNewExpense state to true.
    const addNewExpenseHandler = () => {
        setAddNewExpense(true);
    };

    if (!addingNewExpense) {
        SelectNewExpense =
        // when setAddNewExpense is false, show the addingNewExpense button
            <button onClick={addNewExpenseHandler}>Create New Expense</button>;

    } else {
        // when setAddNewExpense is true, show the setAddNewExpense form
        SelectNewExpense =
            <ExpenseForm onSaveNewExpenseData={SaveNewExpenseData} />;

    }

    return (
        // inject logic for useState here 👍
        <div className='new-expense'>
            {SelectNewExpense}
        </div>
    );
};

export default NewExpense;
