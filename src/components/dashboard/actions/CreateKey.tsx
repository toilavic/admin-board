import React from 'react'
import Popup from 'reactjs-popup';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Add from '@material-ui/icons/Add';
import APICreateKey from '../../../api/APICreateKey'

interface Props {}

function CreateKey(props: Props) {
    const {} = props

    const onSubmit = (event: any) => {
        event.preventDefault();
        const name = event.target['name'].value
        const owner = event.target['owner'].value
        const expire = event.target['expire'].value
        console.log(expire)
        APICreateKey(name, owner, expire)
            .then((results: any) => {
                if(results.status === 400) alert(results.data)
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
               <Add  />
             </IconButton>
           </Tooltip>} modal>
          {(close: any) => (
              <div >
                {/* form */}
                <form onSubmit={ onSubmit}>
                  <div className="form-row">
                    
                  </div>
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
                    <input id="party" name="expire" type="datetime-local" defaultValue="2022-01-01T00:00"/>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <button className="close" onClick={() => {close()}}>&times;</button>
              </div>
          )}
          </Popup>
        </>
    )
}

export default CreateKey
