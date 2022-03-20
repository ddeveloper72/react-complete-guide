import './ExpenseItem.css';

function ExpenseItem() {
    return (
        // root element has to be 1 element, nesting all other elements
        <div className='expense-item'>
            <div>19/03/2022</div>
            <div className='expense-item__description'>
                <h2>Car Loan</h2>
                <div className='expense-item__price'>€ 220.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
