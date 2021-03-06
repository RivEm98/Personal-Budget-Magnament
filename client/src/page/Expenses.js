import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import TableIncExp from '../components/TableIncomeExpenses/TableIncExp'

const Expenses = () => 
(
    <div>
        <div className="row">
            <Navbar pageName="ALKEMY" userName="Emiliano Rivarola"/>
            <div className="row p-0">
                <Sidebar />
                <Dashboard name="Expenses">
                    <TableIncExp modalname="New Expenses" category="EXPENSES"/>
                </Dashboard>
            </div>
            
        </div>
    </div>
)

export default Expenses;