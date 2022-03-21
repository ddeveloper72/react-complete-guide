 import './Card.css';
 
 function Card(props) {
     // remember to include a space when joining two strings so they read as separate strings
     const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
 }

 export default Card;
