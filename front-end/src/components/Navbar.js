import React from 'react';
import {Link} from 'react-router-dom';




function Navbar(props){
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/add-income" className="nav-link">Add Income</Link>
            </li>
            <li className="nav-item">
                <Link to="/add-expense" className="nav-link">Add Expense</Link>
            </li>
            <li className="nav-item">
                <Link to="/setup" className="nav-link">Setup your Account(start here)</Link>
            </li>
        </ul>
    )
}

export default Navbar;