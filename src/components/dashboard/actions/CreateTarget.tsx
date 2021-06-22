import React from 'react'
import './style.css'
import Popup from 'reactjs-popup';
import { Tooltip, IconButton, Button } from "@material-ui/core";
import Add from '@material-ui/icons/Add';
import APICreateTarget from '../../../api/APICreateTarget'
import 'reactjs-popup/dist/index.css';

interface Props { }

function CreateTarget(props: Props) {
  const { } = props

  const onSubmit = (event: any) => {
    event.preventDefault();
    const name = event.target['name'].value
    const key = event.target['key'].value
    const url =  "http://nmas.nome.fi:" +event.target['url'].value
    const details = event.target['details'].value
    APICreateTarget(key, name, url, details)
      .then((results: any) => {
        console.log(results)
        if (results.status === 400) alert(results.data)
        else if (results.status === 403) alert(results.data)
        else {
          alert('created success !')
          window.location.reload(false)
        }
      })
  }

  return (
    <>
      <Popup trigger={
        <Tooltip title="Create a new target">
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
                  <label htmlFor="inputAddress2">Key</label>
                  <input type="text" name="key" className="form-control" id="inputAddress2" placeholder='' />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Port</label>
                  <i className="fa fa-question-circle" aria-hidden="true" title="Base url: http://nmas.nome.fi"></i>
                  <input type="text" name="url" className="form-control" id="inputAddress2" placeholder='50000'/>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Details</label>
                  <input type="text" name="details" className="form-control" id="inputAddress2" placeholder='' />
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

export default CreateTarget
