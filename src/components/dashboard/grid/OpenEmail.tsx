import './style.css'
import React, { useEffect } from 'react'
import Popup from 'reactjs-popup';
import APIGetUserByKey from '../../../api/APIGetUserByKey'
import 'reactjs-popup/dist/index.css';
import UserGridInfo from './UserGridInfo'
interface Props { 
    show: boolean,
    onSetShow: (value: boolean) => void;
    selectedKey: string;
}

const OpenEmail: React.FC<Props> = ({ 
    show, 
    onSetShow, 
    selectedKey 
}) => {

    const [usersInfo, setUsersInfo] = React.useState([]);

    useEffect(() => {
        APIGetUserByKey(selectedKey)
        .then((results: any) => {
            setUsersInfo(results.data[0].users)
        })
    }, [selectedKey])

    return (
        <>
            {
                show && <Popup open={show} modal closeOnDocumentClick onClose={() => onSetShow(false)}>
                {() => (
                    <div className="modal">
                        <button className="close" onClick = { () => onSetShow(false)}>
                            &times;
                        </button>
                        <div className="header"> Email </div>
                        <div>
                                <br />
                                <UserGridInfo usersInfo={usersInfo} />
                                <br />
                        </div>
                    </div>
                )}
            </Popup>
            }
        </>
    )
}

export default OpenEmail;
