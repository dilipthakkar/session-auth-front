import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import Signin from './pages/signin/signin'
import Signup from './pages/signup/signup'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/dashboard" component={Dashboard}/>
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router
