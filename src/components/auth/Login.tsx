import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Typography, Paper, Grid, TextField, CssBaseline, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "./useForm";
import APILogin from '../../api/APILogin'

interface Props { }

interface userInfo {
    token: string,
    refreshToken: string,
    user: userDetails
}

interface userDetails {
    id: number,
    name: string,
    email: string,
    permissionLevel: string
}


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
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    function loginUserCallback() {
        APILogin(values)
            .then((data) => {
                if (data.status === 401) {
                    const message: string = data.data
                    alert(message)
                } else {
                    const userInfo: userInfo = data.data
                    if (userInfo) {
                        if (userInfo.user.permissionLevel === "admin") {
                            localStorage.setItem("token", userInfo.token)
                            localStorage.setItem("refreshToken", userInfo.refreshToken)
                        } else {
                            alert('you are not admin')
                        }
                    }
                }
            })
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
                            name="email"
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
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login
