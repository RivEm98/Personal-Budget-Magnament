import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'

const Home = () => 
(
    <div>
        <div class="row">
            <Navbar pageName="ALKEMY" userName="Emiliano Rivarola"/>
            <Sidebar />
        </div>
    </div>
)

export default Home;