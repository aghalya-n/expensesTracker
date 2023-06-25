import React, {useState} from "react";
import './NewExpense.css';
// import './ExpenseForm'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [addExpense, setAddExpense] = useState(false);

    const addExpenseHandler = () => {
        setAddExpense(true);
    }

    const stopAddExpense = () => {
        setAddExpense(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddExpense(false);
    };
  
    return (
        <div className='new-expense'>
            {!addExpense && <button onClick={addExpenseHandler}>Add New Expense</button>}
            {addExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddExpense}/>}
        </div>
    );
};

export default NewExpense;