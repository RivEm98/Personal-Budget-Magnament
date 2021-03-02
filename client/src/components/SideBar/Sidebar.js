import React from 'react'
import ButtonSidebar from '../ButtonSidebar/ButtonSidebar'
import './Sidebar.css'

const Sidebar = ()=>
(
    <div className="col-md-4 col-lg-3 col-xl-2 sidebar d-none d-md-block d-lg-block">
        <p className="navigate">NAVIGATE</p>
        <ul>
            <ButtonSidebar name="Dashboard" icon="bi bi-house-fill"/>
            <ButtonSidebar name="Income" icon="bi bi-cash-stack"/>
            <ButtonSidebar name="Expenses" icon="bi bi-credit-card"/>
            <ButtonSidebar name="Category Income" icon="bi bi-list-task"/>
            <ButtonSidebar name="Category Expenses" icon="bi bi-list-task"/>
            <ButtonSidebar name="My Account" icon="bi bi-person-fill"/>
        </ul>
    </div>
);

export default Sidebar;
