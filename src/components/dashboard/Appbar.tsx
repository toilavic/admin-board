import React, { useEffect } from 'react';
import { appBarTheme } from './appBarTheme'
import clsx from 'clsx';
import { Link } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';
import { Drawer, Button, CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

interface Props { }

// const useStyles = appBarTheme.useStyles;

const Appbar: React.FC<Props> = ( {} ) => {

    const classes = appBarTheme();
    const theme = useTheme();

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => setOpen(true);

    const handleDrawerClose = () => setOpen(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
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
                        {/* <Link to={props.status ? '/devices' : "/"} className="linkBtn">
                  {username}
                </Link> */}
                    </Typography>
                    <Button href="/" style={{ marginLeft: '80%', fontSize: 16 }} color="inherit">
                        Log-out</Button> : ""
            </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton color="inherit" onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                {/* <Locations setDevice={props.setDevice} checkToken={props.checkToken} port={props.port} status={props.status} /> */}
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <h1>Here is the dashboard</h1>

            </main>
        </div>
    );
}

export default Appbar
