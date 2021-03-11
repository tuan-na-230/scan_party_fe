import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import { SPDatePicker, SPTextField } from '../../../form_field';
import { Button } from '@material-ui/core';

export default function Step1({ data, handleSubmit }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Thông tin sự kiện
            </Typography>
            <Formik
                initialValues={{...data} || {}}
                onSubmit={value => handleSubmit(value)}
            >
                {formikProps => {
                    const { isValid, touched, isSubmitting, isFocus } = formikProps;
                    return (
                        <Form noValidate>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12}>
                                    <FastField
                                        name='name'
                                        component={SPTextField}
                                        type='text'
                                        required
                                        fullWidth
                                        label='event_name'
                                        autoComplete="eventName"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    {/* <FastField
                                        name='date'
                                        component={SPDatePicker}
                                        // required
                                        fullWidth
                                        label='date'
                                    /> */}
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <FastField
                                        name='date'
                                        component={SPTextField}
                                        type='time'
                                        required
                                        fullWidth
                                        label={'begin_time'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FastField
                                        name='beginTime'
                                        component={SPTextField}
                                        type='time'
                                        required
                                        fullWidth
                                        label={'begin_time'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField
                                        name='endTime'
                                        component={SPTextField}
                                        type='text'
                                        required
                                        fullWidth
                                        label={'end_time'}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FastField
                                        name='company'
                                        component={SPTextField}
                                        type='text'
                                        required
                                        fullWidth
                                        label='company'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        name='manager'
                                        component={SPTextField}
                                        type='text'
                                        required
                                        fullWidth
                                        label='manager'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        name='phoneNumber'
                                        component={SPTextField}
                                        type='text'
                                        required
                                        fullWidth
                                        label='phone_number'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        name='facebook'
                                        component={SPTextField}
                                        type='text'
                                        fullWidth
                                        label='facebook'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        name='email'
                                        component={SPTextField}
                                        type='text'
                                        required
                                        fullWidth
                                        label='email'
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit"
                                variant="contained"
                                color="primary">
                                Ok
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
        </React.Fragment >
    );
}