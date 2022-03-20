import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        // root element has to be 1 element, nesting all other elements
        // use an import element tag for the date element
        <div className='expense-item'>
            <ExpenseDate/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>€ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
