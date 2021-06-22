import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'
import KeyGrid from './dashboard/grid/KeyGrid'
import NotFound from './NotFound'
import Appbar from './dashboard/Appbar'

interface Props {
}

const Main: React.FC<Props> = ( { } ) => {
    return (
        <>
            {/* <Appbar/> */}
            <Switch>
                <Route exact path="/" render={(routeProps) => <Login {...routeProps} onLoginRedirect="/dashboard" />}/>
                <Route path="/dashboard" exact render={(routeProps) => <Dashboard {...routeProps} />}/>
                <Route path="/dashboard/keys" render={(routeProps) => <KeyGrid {...routeProps} />}/>
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Main;

