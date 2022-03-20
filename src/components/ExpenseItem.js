import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        // root element has to be 1 element, nesting all other elements
        // remember to convert date object to a string
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>€ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
