import React, { useEffect, useState } from 'react'
import KeyGrid from './grid/KeyGrid'
import CreateKey from './actions/CreateKey'
import HeadingKeys from './fragment/HeadingKeys'
import HeadingActiveKeys from './fragment/HeadingActiveKeys'
import KeyTarget from './KeyTargets/KeyTarget'
import CreateTarget from './actions/CreateTarget'

import './styles.css'

interface Props {
    getNewToken: () => void;
}

const AppContent: React.FC<Props> = ({
    getNewToken
}) => {

    useEffect(() => {
        getNewToken()
    },[])
    

    return (
        <div className="container">
            {/* <HeadingKeys/>
            <HeadingActiveKeys/> */}
            <CreateKey/>
            <h1>Available Keys</h1>
            <KeyGrid/>
            <br/>
            <h1>Active Targets</h1>
            <CreateTarget/>
            <KeyTarget/>
        </div>
    );
}

export default AppContent
