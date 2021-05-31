import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { appBarTheme } from './appBarTheme'
import clsx from 'clsx';
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import AppContent from './AppContent'
import APIRefreshToken from '../../api/APIRefreshToken'

interface Props {
}

const Appbar: React.FC<Props> = ({
}) => {

    const classes = appBarTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => setOpen(true);

    const handleDrawerClose = () => setOpen(false);

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

    useEffect(() => {
        const interval = setInterval(() => {
            var token = localStorage.getItem('token');
                if(token !== null) {
                    getNewToken()
                    console.log('This will run every 30 seconds!');
                }
            }, 30000);
            return () => clearInterval(interval);
    })

    const TOKEN = localStorage.getItem('token')

    if (TOKEN) {
        return (
            <div className={classes.root}>

                <Navbar
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    onLogOut={onLogOut}
                />

                <Sidebar
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                />

                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    {/* MAIN CONTENT */}
                    <AppContent />

                </main>
            </div>
        );
    } else return (
        <><Redirect to='/' /></>
    )
}

export default Appbar
