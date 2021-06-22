import React from 'react';
import { NavLink } from 'react-router-dom';
import { appBarTheme } from '../appBarTheme'
import { useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Timeline, VpnKey, Storage, ChevronLeft, ChevronRight } from '@material-ui/icons';

import './style.css'

interface Props {
    open: boolean,
    handleDrawerClose: () => void;
}
const Sidebar: React.FC<Props> = ({
    open,
    handleDrawerClose
}) => {

    const classes = appBarTheme();
    const theme = useTheme();

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event: any, index: number) => {
        setSelectedIndex(index);
    };

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
                        classes={{ selected: classes.selected }}
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
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

                    <ListItem
                        button
                        classes={{ selected: classes.selected }}
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <Storage />
                        </ListItemIcon>
                        <ListItemText primary={<Typography className={classes.items} color="textSecondary" gutterBottom>
                            Active Targets
                        </Typography>} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Sidebar;
