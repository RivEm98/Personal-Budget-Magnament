import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import TotalIncome from '../components/CardDashboard/TotalIncomes'
import TotalExpenses from '../components/CardDashboard/TotalExpenses'
import IncomeMonth from '../components/CardDashboard/IncomeMonth'
import ExpensesMonth from '../components/CardDashboard/ExpensesMonth'
import Table from '../components/Table/Table'

const Home = () => {
    const userId = window.localStorage.getItem('id')
    const [balance, setBalance] = useState([])

    

    useEffect(() => {
        Axios.get(`http://localhost:3005/users/operations/balance/${userId}`)
        .then((response)=>{
            setBalance(response.data)
        })
    }, [])
return(
    
        <div className="row">
            <Navbar pageName="ALKEMY"/>
            <div className="row p-0">
                <Sidebar />
                <Dashboard name="Dashboard">
                    <TotalIncome name="TOTAL INCOMES" operations={balance} color="#00c0ef" icon="bi bi-cash-stack"/>
                    <ExpensesMonth name="MY EXPENSES THIS MONTH" operations={balance} color="#dd4b39" icon="bi bi-credit-card"/> 
                    <TotalExpenses name="MY TOTAL EXPENSES" operations={balance} color="#00a65a" icon="bi bi-credit-card"/>
                    <IncomeMonth name="INCOME THIS MONTH" operations={balance} color="#f39c12" icon="bi bi-cash-stack"/>
                    <Table />
                </Dashboard>
            </div>
            
        </div>
)}

export default Home;