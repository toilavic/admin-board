import React from 'react'
import HeadingKeys from './progress/HeadingKeys'
import HeadingActiveKeys from './progress/HeadingActiveKeys'
import HeadingOwner from './progress/HeadingOwner'
import HeadingExample from './progress/HeadingExample'
import { appBarTheme } from './appBarTheme'
import Actions from './actions'

import './styles.css'
import { useEffect } from 'react'

interface Props {
}

const AppContent: React.FC<Props> = ({
}) => {

    const classes = appBarTheme();

    return (

        <div className="container">
            <div className={classes.drawerHeader} />
            <h1>Dashboard</h1>

            <div className="progress">
                <div className="keys"><HeadingKeys /></div>
                <div className="active-keys"><HeadingActiveKeys /></div>
            </div>
            <div className="grid">
                <Actions />
            </div>

        </div>
    );
}

export default AppContent
