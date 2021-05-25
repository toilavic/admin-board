import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

interface Props { }

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    }
}));

function Login(props: Props) {
    const { } = props
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
          </Typography>

                <form className={classes.form} onSubmit={ () => {
                    console.log('clicked')
                } }>
                    <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Username" autoComplete="email" autoFocus
                        name="username"
                    />
                    <TextField variant="outlined" margin="normal" type='password' required fullWidth id="password" label="Password" autoComplete="email"
                        name="password"
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign In
            </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                {"New customer? Sign up"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/recover"  style={{ textDecoration: 'none' }}>
                                {"Forgot password? Click here"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Login
