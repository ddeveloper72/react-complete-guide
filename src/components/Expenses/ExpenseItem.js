import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    // add react hook, with an array of current value and function for changed value
    const [title, setTitle] = useState(props.title);
    console.log(title);

    // let title = props.title;
    // the click handler evaluated the click only once the DOM has loaded.
    const clickHandler = () => {
        // call SetTitle to reevaluate ExpenseItem, using the newly defined value 
        // for the initial state value
        setTitle('Updated');
        console.log(title);
    };

    return (
        // root element has to be 1 element, nesting all other elements
        // use an import element tag for ExpenseDate then inherit data 
        // from the date key value from expense object in App.js
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>€ {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
