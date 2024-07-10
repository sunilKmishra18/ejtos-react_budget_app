import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        /*console.log("New Budget:"+newBudget);
        console.log("Old Budget:"+budget);

        if(budget > newBudget){
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }else*/{
            setNewBudget(event.target.value);
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
