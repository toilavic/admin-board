import React from 'react';
import { NavLink } from 'react-router-dom';
import { appBarTheme } from '../appBarTheme'
import { useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Timeline, VpnKey, ChevronLeft, ChevronRight } from '@material-ui/icons';
import APIRefreshToken from '../../../api/APIRefreshToken'
import APIGetKeys from '../../../api/APIGetKeys'

import './style.css'
import { useEffect } from 'react';

interface Props {
    open: boolean,
    handleDrawerClose: () => void;
    onLogOut: () => void;
}
const Sidebar: React.FC<Props> = ({
    open,
    handleDrawerClose,
    onLogOut
}) => {

    const classes = appBarTheme();
    const theme = useTheme();

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event: any, index: number) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        switch (window.location.pathname) {
            case "/dashboard":
                setSelectedIndex(0);
                break;
            case "/dashboard/keys":
                setSelectedIndex(1);
                break;
            // case "/dashboard/active-keys":
            //     setSelectedIndex(2);
            //     break;

            default:
                setSelectedIndex(0);
                break;
        }
    }, [selectedIndex])


    // IMPLEMENT THE REFRESH TOKEN

    useEffect(() => {
        var token = localStorage.getItem('token')
        var rToken = localStorage.getItem('refreshToken')
        APIGetKeys(token)
            .then(result => {
                if (result === undefined) {
                    // if token is invalid => get new token and set it
                    APIRefreshToken(rToken)
                        .then((result: any) => {
                            if (result === 403) {
                                onLogOut();
                                // @ts-ignore
                                window.location.reload(false);
                            }
                            else {
                                localStorage.setItem('token', result.token)
                                // @ts-ignore
                                window.location.reload(false);
                            }
                        })
                } else {
                    console.log('token is OKay')
                }
            })
            .catch(error => console.log(error))
    }, [])



    useEffect(() => {
        var token = localStorage.getItem('token')
        var rToken = localStorage.getItem('refreshToken')
        APIGetKeys(token)
            .then(result => {
                if (result === undefined) {
                    // if token is invalid => get new token and set it
                    APIRefreshToken(rToken)
                        .then((result: any) => {
                            if (result === 403) {
                                onLogOut();
                                // @ts-ignore
                                window.location.reload(false);
                            }
                            else {
                                localStorage.setItem('token', result.token)
                                // @ts-ignore
                                window.location.reload(false);
                            }
                        })
                } else {
                    console.log('token is OK')
                }
            })
            .catch(error => console.log(error))
    }, [selectedIndex])


    return (
        <>
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
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
                <Typography className={classes.title} gutterBottom>
                    GENERAL
                </Typography>
                <List component="nav" aria-label="main folders">
                    <ListItem
                        button
                        component={NavLink} to={'/dashboard'}
                        classes={{ selected: classes.selected }}
                        selected={selectedIndex === 0}
                        onClick={(event: any) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <Timeline />
                        </ListItemIcon>
                        <ListItemText primary={<Typography className={classes.items} color="textSecondary" gutterBottom>
                            Dashboard
                        </Typography>} />
                    </ListItem>

                    <br></br>
                    <Typography className={classes.title} gutterBottom>
                        TOOLS
                    </Typography>

                    <ListItem
                        button
                        component={NavLink} to={'/dashboard/keys'}
                        classes={{ selected: classes.selected }}
                        selected={selectedIndex === 1}
                        onClick={(event: any) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <VpnKey />
                        </ListItemIcon>
                        <ListItemText primary={<Typography className={classes.items} color="textSecondary" gutterBottom>
                            Keys
                        </Typography>} />
                    </ListItem>

                    {/* <ListItem
                        button
                        component={NavLink} to={'/dashboard/active-keys'}
                        classes={{ selected: classes.selected }}
                        selected={selectedIndex === 2}
                        onClick={(event: any) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <Storage />
                        </ListItemIcon>
                        <ListItemText primary={<Typography className={classes.items} color="textSecondary" gutterBottom>
                            Active Targets
                        </Typography>} />
                    </ListItem> */}
                </List>
            </Drawer>
        </>
    );
}

export default Sidebar;

