import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../page/Login'
import './App.css'
import Register from '../page/Register'
import Home from '../page/Home'
import Income from '../page/Income'
import Expenses from '../page/Expenses'
import CategoryIncome from '../page/CategoryIncome'
import CategoryExpenses from '../page/CategoryExpenses'
/* import PageNotFound from '../pages/PageNotFound'  */




function App(){
    return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/income" component={Income} />
                    <Route exact path="/expenses" component={Expenses} />
                    <Route exact path="/category/income" component={CategoryIncome} />
                    <Route exact path="/category/expenses" component={CategoryExpenses} />
                    {/* <Route component={PageNotFound} /> */}
                </Switch>
            </BrowserRouter>
    )
};
export default App;