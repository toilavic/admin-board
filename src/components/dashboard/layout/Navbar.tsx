import React from 'react';
import { appBarTheme } from '../appBarTheme'
import clsx from 'clsx';
import {Button, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
    open: boolean,
    handleDrawerOpen: () => void;
    onLogOut : () => void;
}

const Navbar: React.FC<Props> = ({
    open,
    handleDrawerOpen,
    onLogOut
}) => {

    const classes = appBarTheme();

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                color="default"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                    </Typography>
                    <Button href="/" onClick={onLogOut} style={{ marginLeft: '80%', fontSize: 16 }} color="inherit">
                        Log-out</Button>
            </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar
