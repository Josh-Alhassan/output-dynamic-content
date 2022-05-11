import React from 'react';
import './ExpenseItem.css';
import Card from './Card';

import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  // Button Event Handler function {}
  const clickHandler = () => {
    console.log('Button Clicked')
  }
  // const expenseDate = new Date(2022, 5, 7);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67

  // const month = props.date.toLocaleString("en-Us", {month: "long"});
  // const day = props.date.toLocaleString("en-Us", {day: "2-digit"});
  // const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      {/* <div>
        <div>{month} </div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}

      <ExpenseDate date={props.date} />
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
