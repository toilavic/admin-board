import React from 'react'
import HeadingKeys from './progress/HeadingKeys'
import HeadingActiveKeys from './progress/HeadingActiveKeys'
import { appBarTheme } from './appBarTheme'
import Actions from './actions'
import KeyTarget from './KeyTargets/KeyTarget'

import './styles.css'

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
                <div className="tools"><Actions /></div>
            </div>
            <div>
                <KeyTarget/>
            </div>

        </div>
    );
}

export default AppContent
