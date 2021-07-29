import React, { useEffect } from 'react';
import { Storage } from '@material-ui/icons';
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { HeadingTheme } from './HeadingTheme';
import APIGetTargets from '../../../api/APIGetTargets';

export default function HeadingKeys() {

  const classes = HeadingTheme();
  const TOKEN = localStorage.getItem('token')

  const [availableKeys, setAvailableKeys] = React.useState(0)

  useEffect(() => {
    APIGetTargets(TOKEN)
        .then((data) => setAvailableKeys(data.length))
        .catch((error) => console.log(error))
}, [])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Available Targets
        </Typography>
        <Typography className={classes.keys} variant="h4" component="h5">
          {availableKeys}
          <Storage className={classes.keyIcon}/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="/dashboard/active-keys" size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}