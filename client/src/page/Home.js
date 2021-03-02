import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import CardDashboard from '../components/CardDashboard/CardDashboard'

const Home = () => 
(
    <div>
        <div class="row">
            <Navbar pageName="ALKEMY" userName="Emiliano Rivarola"/>
            <div className="row p-0">
                <Sidebar />
                <Dashboard name="Dashboard">
                    <CardDashboard name="TOTAL INCOMES" price="500" color="#00c0ef" icon="bi bi-cash-stack"/>
                    <CardDashboard name="MY TOTAL EXPENSES" price="500" color="#00a65a" icon="bi bi-credit-card"/>
                    <CardDashboard name="INCOME THIS MONTH" price="500" color="#f39c12" icon="bi bi-cash-stack"/>
                    <CardDashboard name="MY EXPENSES THIS MONTH" price="500" color="#dd4b39" icon="bi bi-credit-card"/>
                </Dashboard>
            </div>
            
        </div>
    </div>
)

export default Home;