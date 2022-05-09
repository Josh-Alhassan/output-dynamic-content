import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 5, 7);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67

  const month = props.date.toLocaleString("en-Us", {month: "long"});
  const day = props.date.toLocaleString("en-Us", {day: "2-digit"});
  const year = props.date.getFullYear();

  return (
    <div className = "expense-item">
      <div>
        <div>{month} </div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div>{props.date.toISOString()}</div>
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">£ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
