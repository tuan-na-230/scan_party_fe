import React from 'react'
import { Grid, Box, Button } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LoginIntro from './LoginIntro';
import LoginHeader from './LoginHeader';
import ForgotPassword from './ForgotPassword/index';
import LoginForm from './Login/index';
import SignUp from './SignUp';

function Login() {
    let { path } = useRouteMatch();
    return (
        <Box className="login">
            <Grid container >
                <Grid item md={6}>
                    <LoginIntro />
                </Grid>
                <Grid item md={6}>
                    <LoginHeader />
                    <Switch>
                        <Route exact path={`${path}/sign-in`}>
                            <LoginForm />
                        </Route>
                        <Route path={`${path}/sign-up`}>
                            <SignUp />
                        </Route>
                        <Route path={`${path}/forgot-password`}>
                            <ForgotPassword />
                        </Route>
                    </Switch>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Login

