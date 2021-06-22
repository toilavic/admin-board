import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    borderRadius: 40,
    padding: 30,
    lineHeight: 1.5,
    boxShadow: `0px 2px 8px rgba(0,0,0,0.05)`
    // textAlign: 'center'
  },
  keys : {
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    fontWeight: 400
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HeadingKeys() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          Available Keys
        </Typography>
        <Typography className={classes.keys} variant="h4" component="h5">
          15,534
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}