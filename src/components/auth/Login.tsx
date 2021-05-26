import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {Typography, Paper, Grid, TextField, CssBaseline, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "./useForm";

import {Post} from '../../api/APILogin'

interface Props { }

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(img/chess.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
    },
}));


const Login: React.FC<Props> = ({ }) => {

    const initialState = {
        username: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    async function loginUserCallback() {
        // send "values" to database
        console.log(values)
        Post.login(values)
    }

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
            </Typography>

                    {/* form */}
                    <form className={classes.form} noValidate onSubmit={onSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="username"
                            onChange={onChange}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            onChange={onChange}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
              </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="#">
                                    Forgot password?
                  </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login
