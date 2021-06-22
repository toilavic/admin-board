import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { appBarTheme } from './appBarTheme'
import clsx from 'clsx';
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import AppContent from './AppContent'
import APIRefreshToken from '../../api/APIRefreshToken'

interface Props {
    onLogOut: () => void;
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void
}

const Appbar: React.FC<Props> = ({
    onLogOut,
    open,
    handleDrawerClose,
    handleDrawerOpen
}) => {

    const classes = appBarTheme();

    const _onLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }

    const [_open, setOpen] = React.useState(true);

    const _handleDrawerOpen = () => setOpen(true);

    const _handleDrawerClose = () => setOpen(false);

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
