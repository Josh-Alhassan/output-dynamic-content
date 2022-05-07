import React from 'react';
import './style.css';

import ExpenseItem from './components/ExpenseItem.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}
