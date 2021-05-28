import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'
import NotFound from './NotFound'

interface Props {
}

const Main: React.FC<Props> = ( { } ) => {
    return (
        <>  
            <Switch>
                <Route path="/" exact render={(routeProps) => <Login {...routeProps} onLoginRedirect="/dashboard" />}/>
                <Route path="/dashboard" exact render={(routeProps) => <Dashboard {...routeProps} />}/>
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Main;

