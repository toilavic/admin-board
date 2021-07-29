import VpnKeyIcon from '@material-ui/icons/VpnKey';
import './style.css'
import Popup from 'reactjs-popup';
import { Tooltip, IconButton, Button } from "@material-ui/core";
import APICreateKey from '../../../api/APICreateKey'
import 'reactjs-popup/dist/index.css';
import swal from 'sweetalert';

interface Props { }

function CreateKey(props: Props) {
  const { } = props

  const onSubmit = (event: any) => {
    event.preventDefault();
    const name = event.target['name'].value
    const owner = event.target['owner'].value
    const expire = event.target['expire'].value
    APICreateKey(name, owner, expire)
      .then((results: any) => {
        console.log(results)
        if (results.status === 400) {
          alert(results.data)
        }
        else if (results.status === 403) alert(results.data)
        else {
          const KEY = results.data.key
          swal({
            text: 'Key created',
            // @ts-ignore
            button: {
              text: "Copy key",
            },
            content: {
              element: "input",
              attributes: {
                placeholder: "key",
                type: "input",
                value: KEY,
              },

            },
          })
            .then(() => {
              var dummy = document.createElement("textarea");
              // to avoid breaking orgain page when copying more words
              // cant copy when adding below this code
              // dummy.style.display = 'none'
              document.body.appendChild(dummy);
              //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
              dummy.value = KEY
              dummy.select();
              document.execCommand("copy");
              document.body.removeChild(dummy);
              swal("Key copied!", {
                icon: "success",
              });
            });
        }
      })
  }

  return (
    <>
      <Popup closeOnDocumentClick={false} trigger={
        <Tooltip title="Create a new key">
          <IconButton>
            <VpnKeyIcon />
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
                <Button style={{ marginTop: '20px' }} type="submit" variant="contained" color="primary">Submit</Button>
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
