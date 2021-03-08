import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import TableCategories from '../components/TableCategories/TableCategories'

const CategoryExpenses = () => 
(
    <div>
        <div class="row">
            <Navbar pageName="ALKEMY" userName="Emiliano Rivarola"/>
            <div className="row p-0">
                <Sidebar />
                <Dashboard name="Category Expenses">
                    <TableCategories/>
                </Dashboard>
            </div>
            
        </div>
    </div>
)

export default CategoryExpenses;