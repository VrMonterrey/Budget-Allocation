import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value <= 20000){
            if (event.target.value >= totalExpenses){
                setNewBudget(event.target.value);
            }
            else
            {
                alert("You cannot reduce the budget value lower than the spending");
            }
        }
        else
        {
            alert("The value cannot exceed £20000");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
