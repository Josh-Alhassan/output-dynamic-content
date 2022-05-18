import React from 'react';

// Import CSS file
import './NewExpense.css';

// import ExpenseForm.js
import ExpenseForm from './ExpenseForm';

// {}
const NewExpense = () => {
  return (
    <div className = "new-expense">
      <ExpenseForm />
    </div>
  )
}

export default NewExpense;