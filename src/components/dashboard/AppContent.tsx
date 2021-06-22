import React, { useEffect, useState } from 'react'
import KeyGrid from './grid/KeyGrid'
import CreateKey from './actions/CreateKey'
import HeadingKeys from './progress/HeadingKeys'
import HeadingActiveKeys from './progress/HeadingActiveKeys'
import HeadingOwner from './progress/HeadingOwner'
import KeyTarget from './KeyTargets/KeyTarget'
import CreateTarget from './actions/CreateTarget'
import { appBarTheme } from './appBarTheme'
import './styles.css'

interface Props {
    getNewToken: () => void;
}

const AppContent: React.FC<Props> = ({
    getNewToken
}) => {

    useEffect(() => {
        getNewToken()
    }, [])

    const classes = appBarTheme();

    return (
        
        <div className="container">
        <div className={classes.drawerHeader} />

            <div className="progress">
                <div className="keys"><HeadingKeys/></div>
                <div className="active-keys"><HeadingActiveKeys/></div>
                <div className="owner"><HeadingOwner/></div>
            </div>
            <div className="grid">
                <CreateKey />
                
                <br />
                <h1>Active Targets</h1>
                <CreateTarget />
                <KeyTarget />
            </div>

        </div>
    );
}

export default AppContent
