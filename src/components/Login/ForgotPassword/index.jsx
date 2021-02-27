import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link as LinkUi } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SPTextField from '../../form_field/SPTextField';
import { FastField, Formik, Form, Field } from 'formik';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function ForgotPassword() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('reset_password')}
                </Typography>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={value => alert(JSON.stringify(value))}
                >
                    {formikProps => {
                        const { validateYupSchema, errors, touched } = formikProps;
                        return (
                            <Form className={classes.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <FastField
                                            name="email"
                                            component={SPTextField}
                                            type="text"
                                            variant="outlined"
                                            label="email_address"
                                            autoFocus
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    {t('reset_password')}
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link to={`sign-in`}>
                                            <LinkUi variant="body2">
                                                {t('already_have_login_and_password')}
                                            </LinkUi>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </Container >
    );
}

export default ForgotPassword;