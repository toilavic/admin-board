import React, { useEffect } from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { HeadingTheme } from './HeadingTheme';
import APIGetKeys from '../../../api/APIGetKeys';

export default function HeadingKeys() {

  const classes = HeadingTheme();
  const TOKEN = localStorage.getItem('token')

  const [availableKeys, setAvailableKeys] = React.useState(0)

  useEffect(() => {
    APIGetKeys(TOKEN)
        .then((data) => {
          setAvailableKeys(data.length)
        })
        .catch((error) => console.log(error))
})

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Available Keys
        </Typography>
        <Typography className={classes.keys} variant="h4" component="h5">
          {availableKeys}
          <VpnKeyIcon className={classes.keyIcon}/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="/dashboard/keys" size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}