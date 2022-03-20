import './ExpenseItem.css';

function ExpenseItem(props) {

    // define specific date elements as constants
    const month =  props.date.toLocaleString('ie-EU', {month: 'long'});
    const day = props.date.toLocaleString('ie-EU', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        // root element has to be 1 element, nesting all other elements
        // create individual elements for the date values
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>€ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
