import React from 'react'
import './style.css'
import Popup from 'reactjs-popup';
import { Tooltip, IconButton, Button } from "@material-ui/core";
import Add from '@material-ui/icons/Add';
import APICreateKey from '../../../api/APICreateKey'
import 'reactjs-popup/dist/index.css';

interface Props { }

function CreateKey(props: Props) {
  const { } = props

  const onSubmit = (event: any) => {
    event.preventDefault();
    const name = event.target['name'].value
    const owner = event.target['owner'].value
    const expire = event.target['expire'].value
    console.log(expire)
    APICreateKey(name, owner, expire)
      .then((results: any) => {
        if (results.status === 400) alert(results.data)
        else {
          alert('created success')
          window.location.reload(false)
        }
      })
  }

  return (
    <>
      <Popup trigger={
        <Tooltip title="Create a new key">
          <IconButton>
            <Add />
          </IconButton>
        </Tooltip>} modal>
        {(close: any) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Add a new key </div>
            <div className="content">
              {/* form */}
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="inputAddress">Name</label>
                  <input type="text" name="name" className="form-control" id="inputAddress" placeholder='' />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Owner</label>
                  <input type="text" name="owner" className="form-control" id="inputAddress2" placeholder='' />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Expires At</label>
                  <input id="party" name="expire" type="datetime-local" defaultValue="2022-01-01T00:00" />
                </div>
                <Button style = {{marginTop: '20px'}} type="submit" variant="contained" color="primary">Submit</Button>
              </form>
            </div>
            <button className="close" onClick={() => { close() }}>&times;</button>
          </div>
        )}
      </Popup>
    </>
  )
}

export default CreateKey
