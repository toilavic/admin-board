import './style.css'
import React from 'react'
import Popup from 'reactjs-popup';
import { Tooltip, IconButton, Button } from "@material-ui/core";
import APIGetUserByKey from '../../../api/APIGetUserByKey'
import SearchIcon from '@material-ui/icons/Search';
import 'reactjs-popup/dist/index.css';
import UserGrid from './UserGrid'
interface Props { }

interface result {
    name: string,
    email: string
}

function SearchUserKey(props: Props) {

    const [usersInfo, setUsersInfo] = React.useState([]);
    const { } = props

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

    return (
        <>
            <Popup trigger={
                <Tooltip title="Search users by key">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Tooltip>} modal>
                {(close: any) => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Search users by key </div>
                        <div>
                            {/* form */}
                            <form onSubmit={onSubmit}>
                                <br />
                                Key: <input type="text" name="key" className="form-control key-input" id="inputAddress" placeholder='' /> 	&nbsp;
                                <Button type="submit" variant="contained" color="primary"><SearchIcon /></Button>

                                <UserGrid usersInfo={usersInfo} />
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
