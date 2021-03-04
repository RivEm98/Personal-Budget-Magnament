import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import TableIncExp from '../components/TableIncomeExpenses/TableIncExp'

const Income = () => 
(
    <div>
        <div class="row">
            <Navbar pageName="ALKEMY" userName="Emiliano Rivarola"/>
            <div className="row p-0">
                <Sidebar />
                <Dashboard name="Income">
                    <TableIncExp modalname="New Income"/>
                </Dashboard>
            </div>
            
        </div>
    </div>
)

export default Income;