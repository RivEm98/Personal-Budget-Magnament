import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../page/Login'
import './App.css'
import Register from '../page/Register'
import Home from '../page/Home'
/* import PageNotFound from '../pages/PageNotFound'  */
function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/home" component={Home} />
                {/* <Route component={PageNotFound} /> */}
            </Switch>
        </BrowserRouter>
    )
};
export default App;