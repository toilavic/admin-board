import React, { useEffect, useState } from 'react'
import KeyGrid from './grid/KeyGrid'
import CreateKey from './actions/CreateKey'

interface Props { }

const AppContent: React.FC<Props> = ({ }) => {

    

    return (
        <>
            <CreateKey/>
            
            <KeyGrid/>
        </>
    );
}

export default AppContent
