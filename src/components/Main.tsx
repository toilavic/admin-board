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

interface Props {
}

const Main: React.FC<Props> = ({ }) => {
    const classes = appBarTheme();

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => setOpen(true);

    const handleDrawerClose = () => setOpen(false);

    return (
        <>
            <Switch>
                <Route exact path="/" render={(routeProps) => <Login {...routeProps} onLoginRedirect="/dashboard" />} />
                <div>
                    <Appbar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
                    
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

