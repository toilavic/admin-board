import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'
import KeyGrid from './dashboard/grid/KeyGrid'
import NotFound from './NotFound'
import Appbar from './dashboard/Appbar'
import { appBarTheme } from './dashboard/appBarTheme'
import clsx from 'clsx';
import KeyTarget from './dashboard/KeyTargets/KeyTarget'
import { useEffect } from 'react'
import APIRefreshToken from '../api/APIRefreshToken'

interface Props {
}

const Main: React.FC<Props> = ({ }) => {
    const classes = appBarTheme();

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => setOpen(true);

    const handleDrawerClose = () => setOpen(false);

    const onLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }

    const refreshTokenInEveryThirtySeconds = () => {
        var rToken = localStorage.getItem('refreshToken');
        APIRefreshToken(rToken)
            .then((results) => {
                if (results === 401 || results === 403) {
                    alert('Please login!')
                    onLogOut()
                    window.location.reload(false)
                } else {
                    localStorage.setItem('token', results.token)
                }
            })
            .catch(error => console.error(error))
    }

    const TOKEN = localStorage.getItem('token')

    useEffect(() => {
        // called at the first render
        if (TOKEN) refreshTokenInEveryThirtySeconds(); 
        // set timer for 30 seconds call....
        const interval = setInterval(() => {
            if (TOKEN !== null) {
                refreshTokenInEveryThirtySeconds()
                console.log('Applied refreshTokenInEveryThirtySeconds!');
            }
        }, 30000);
        return () => clearInterval(interval);
    })

    return (
        <>
            <Switch>
                <Route exact path="/" render={(routeProps) => <Login {...routeProps} onLoginRedirect="/dashboard" />} />
                <div>
                    <Appbar open={open} handleDrawerOpen={handleDrawerOpen} 
                                        handleDrawerClose={handleDrawerClose}
                                        onLogOut = {onLogOut} />
                    
                    <main className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}>
                        <Route path="/dashboard" exact render={(routeProps) => <Dashboard {...routeProps} />} />
                        {/* <Route component={NotFound} /> */}
                        <Route path="/dashboard/keys" render={(routeProps) => <KeyGrid  {...routeProps} />} />
                        <Route path="/dashboard/active-keys" render={(routeProps) => <KeyTarget  {...routeProps} />} />
                    </main>
                    
                </div>
            </Switch>

        </>
    )
}

export default Main;

