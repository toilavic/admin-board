import React from 'react';
import { Redirect } from "react-router-dom";
import { appBarTheme } from './appBarTheme'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'

interface Props {
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
    onLogOut: () => void;
}

const Appbar: React.FC<Props> = ({
    open,
    onLogOut,
    handleDrawerClose,
    handleDrawerOpen
}) => {

    const classes = appBarTheme()

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
                    onLogOut={onLogOut}
                />

            </div>
        );
    } else return (
        <><Redirect to='/' /></>
    )
}

export default Appbar
