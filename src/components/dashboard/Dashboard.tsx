import React, { useEffect } from 'react';
import AppContent from './AppContent';
import APIRefreshToken from '../../api/APIRefreshToken'

interface Props {
    open: boolean
}

const Dashboard: React.FC<Props> = ({
    open
}) => {

    const onLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }

    const getNewToken = () => {
        var rToken = localStorage.getItem('refreshToken');
        APIRefreshToken(rToken)
            .then((results) => {
                if (results === 401 || results === 403) {
                    alert('Please login!')
                    onLogOut()
                    window.location.reload(false)
                } else {
                    localStorage.setItem('token', results.token)
                }
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            var token = localStorage.getItem('token');
            if (token !== null) {
                getNewToken()
                console.log('This will run every 30 seconds!');
            }
        }, 30000);
        return () => clearInterval(interval);
    })

    return (
        <>
            <AppContent getNewToken={getNewToken} />
        </>
    )
}

export default Dashboard;