import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const buttonAddStyle = {
        width: '25px',
        height: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#6AA121',
        color: 'white',
        border: 'none',
        borderRadius: '50%', 
        fontSize: '30px',
        cursor: 'pointer'
    };

    const buttonMinusStyle = {
        width: '25px',
        height: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '50%', 
        fontSize: '30px',
        cursor: 'pointer'
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={buttonAddStyle}>+</button></td>
        <td><button onClick={event=> handleDeleteExpense()} style={buttonMinusStyle}>-</button></td>
        </tr>
    );
};

export default ExpenseItem;
