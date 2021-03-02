import React from 'react'
import ButtonSidebar from '../ButtonSidebar/ButtonSidebar'
import './Sidebar.css'

const Sidebar = ()=>
(
    <div className="col-md-4 col-lg-3 col-xl-2 sidebar d-none d-md-block d-lg-block">
        <p className="navigate">NAVIGATE</p>
        <ul>
            <ButtonSidebar name="Dashboard" icon="bi bi-house-fill" to="/home"/>
            <ButtonSidebar name="Income" icon="bi bi-cash-stack" to="/income"/>
            <ButtonSidebar name="Expenses" icon="bi bi-credit-card" to="/expenses"/>
            <ButtonSidebar name="Category Income" icon="bi bi-list-task" to="/category/income"/>
            <ButtonSidebar name="Category Expenses" icon="bi bi-list-task" to="/category/expenses"/>
            <ButtonSidebar name="My Account" icon="bi bi-person-fill" to="/account"/>
        </ul>
    </div>
);

export default Sidebar;
