import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { appBarTheme } from './appBarTheme'
import clsx from 'clsx';
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import AppContent from './AppContent'
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

            </div>
        );
    } else return (
        <><Redirect to='/' /></>
    )
}

export default Appbar
