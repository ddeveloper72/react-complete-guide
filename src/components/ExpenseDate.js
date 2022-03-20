import './ExpenseDate.css';

function ExpenseDate(props) {

    // define specific date elements as constants
    const month = props.date.toLocaleString('ie-EU', { month: 'long' });
    const day = props.date.toLocaleString('ie-EU', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ExpenseDate;