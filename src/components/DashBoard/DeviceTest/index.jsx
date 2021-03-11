import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import ScanCode from '../../ScanCode';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        padding: theme.spacing(2),
    },
}));

export default function DeviceTest() {
    const classes = useStyles();
    return (
        <Paper elevation={24} className={classes.root} >
            <ScanCode width={'100%'} height={'100vh'} />
        </Paper>
    )
}