import React, { useEffect } from 'react';
import AppBar from './Appbar'
import AppContent from './AppContent';
import APIRefreshToken from '../../api/APIRefreshToken'

import { appBarTheme } from './appBarTheme'
import clsx from 'clsx';

interface Props {

}

const Dashboard: React.FC<Props> = () => {

    const classes = appBarTheme();

    const onLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }

    const getNewToken = () => {
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

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => setOpen(true);

    const handleDrawerClose = () => setOpen(false);

    useEffect(() => {
        const interval = setInterval(() => {
            var token = localStorage.getItem('token');
            if (token !== null) {
                getNewToken()
                console.log('This will run every 30 seconds!');
            }
        }, 30000);
        return () => clearInterval(interval);
    })

    return (
        <>
            {/* <AppBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose = {handleDrawerClose} onLogOut={onLogOut}/> */}
            <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    {/* MAIN CONTENT */}
                    <AppContent getNewToken = {getNewToken} />

                </main>
            
        </>
    )
}

export default Dashboard;