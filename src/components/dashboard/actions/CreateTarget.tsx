import './style.css'
import Popup from 'reactjs-popup';
import { Tooltip, IconButton, Button } from "@material-ui/core";
import { Storage } from '@material-ui/icons';
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
            <Storage />
          </IconButton>
        </Tooltip>} modal>
        {(close: any) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Add a new target </div>
            <div className="content">
              {/* form */}
              <form onSubmit={onSubmit}>
                <div>
                  <label htmlFor="inputAddress">Name</label>
                  <input type="text" name="name" placeholder='' />
                </div>
                <div>
                  <label htmlFor="inputAddress2">Key</label>
                  <input type="text" name="key" placeholder='' />
                </div>
                <div>
                  <label htmlFor="inputAddress2">Port</label>
                  <input type="text" name="url" placeholder='50000'/>
                </div>
                <div>
                  <label htmlFor="inputAddress2">Details</label>
                  <input type="text" name="details" placeholder='' />
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
