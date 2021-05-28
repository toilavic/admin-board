import React, { useState } from 'react';
import { loginTheme } from './loginTheme'
import { Link, Redirect } from 'react-router-dom'
import { History, LocationState } from "history";
import UserType from './UserType'
import { Typography, Paper, Grid, TextField, CssBaseline, Button, Avatar } from '@material-ui/core';
import { useForm } from "./useForm";
import APILogin from '../../api/APILogin'

interface Props { 
    onLoginRedirect: string,
    history: History<LocationState>
}

const Login: React.FC<Props> = ({
    onLoginRedirect,
    history
 }) => {

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
                    const userInfo: UserType = data.data
                    if (userInfo) {
                        if (userInfo.user.permissionLevel === "admin") {
                            localStorage.setItem("token", userInfo.token)
                            localStorage.setItem("refreshToken", userInfo.refreshToken)
                            history.push(onLoginRedirect)
                        } else {
                            alert('you are not admin')
                        }
                    }
                }
            })
    }

    const classes = loginTheme();
    const isLogin = localStorage.getItem('token')
    
    if (!isLogin) {
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
    } else return <><Redirect to="/dashboard"/></>
}

export default Login
