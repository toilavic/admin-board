import React from 'react';
import { appBarTheme } from '../appBarTheme'
import { useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
            </Drawer>
        </>
    );
}

export default Sidebar;
