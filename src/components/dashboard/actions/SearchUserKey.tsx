import './style.css'
import React, { useEffect } from 'react'
import Popup from 'reactjs-popup';
import { Tooltip, IconButton, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import 'reactjs-popup/dist/index.css';

import APIGetUserByKey from '../../../api/APIGetUserByKey'
import APIGetAllUsers from '../../../api/APIGetAllUsers';

import ShowAllUsers from './ShowAllUsers';
import UserGrid from './UserGrid';


interface Props { }

function SearchUserKey(props: Props) {

    const [allUsers, setAllUser] = React.useState([])
    const [usersInfo, setUsersInfo] = React.useState([]);
    const [onShowAllUsers, setOnShowAllUsers] = React.useState(false)

    const onSubmit = (event: any) => {
        event.preventDefault();
        const key = event.target['key'].value
        APIGetUserByKey(key)
            .then((results: any) => {
                console.log(results.data[0].users)
                if (results.data[0] === undefined) alert('Invalid key')
                else setUsersInfo(results.data[0].users)
            })
    }

    const onShowUsers = () => {
        APIGetAllUsers()
        .then((result) => setAllUser(result))
        .catch((error) => console.log('SHOW USERS ERROR' , error))
        setOnShowAllUsers(!onShowAllUsers)
    }
    

    return (
        <>
            <Popup trigger={
                <Tooltip title="Search users by key">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Tooltip>} modal closeOnDocumentClick = {false}>
                {(close: any) => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Search users by key </div>
                        <div>
                            {/* form - FOR ONLY KEYS SEARCHING*/}
                            <form onSubmit={onSubmit}>
                                <br />
                                <>Key: <input type="text" name="key" className="form-control key-input" id="inputAddress" placeholder='' />&nbsp; </>
                                <Button type="submit" variant="contained" color="primary" onClick={() => setOnShowAllUsers(false)}><SearchIcon /></Button>
                                <Button style={{ float: 'right', marginRight: '7.5rem' }} type="submit" variant="contained" color="primary" onClick={onShowUsers}>
                                    {onShowAllUsers ? 'Hide' : 'Show'} all users</Button>
                                    {
                                        onShowAllUsers && <div>
                                            {/* form - FOR ALL KEYS SEARCHING*/}
                                            <ShowAllUsers usersInfo={allUsers} />
                                            <br />
                                        </div>
                                    }
                                    
                                    {
                                        !onShowAllUsers && <div>
                                            <UserGrid usersInfo={usersInfo} />
                                            <br />
                                        </div>
                                    }

                                <br />
                            </form>
                        </div>
                        <button className="close" onClick={() => { close() }}>&times;</button>
                    </div>
                )}
            </Popup>
        </>
    )
}

export default SearchUserKey;
