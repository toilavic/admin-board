import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { appBarTheme } from './appBarTheme'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import APIRefreshToken from '../../api/APIRefreshToken'

interface Props {
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void
}

const Appbar: React.FC<Props> = ({
    open,
    handleDrawerClose,
    handleDrawerOpen
}) => {

    const classes = appBarTheme();

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
        const interval = setInterval(() => {
            if (TOKEN !== null) {
                refreshTokenInEveryThirtySeconds()
                console.log('Applied refreshTokenInEveryThirtySeconds!');
            }
        }, 30000);
        return () => clearInterval(interval);
    })


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

            </div>
        );
    } else return (
        <><Redirect to='/' /></>
    )
}

export default Appbar
