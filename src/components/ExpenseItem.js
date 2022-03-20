import './ExpenseItem.css';

function ExpenseItem() {
    // add constants
    const expenseDate = new Date(2022, 3, 20);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 220.00;

    return (
        // root element has to be 1 element, nesting all other elements
        // remember to convert date object to a string
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>€ {expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
