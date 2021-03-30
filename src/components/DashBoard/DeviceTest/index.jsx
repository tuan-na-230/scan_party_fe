import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { toast } from 'react-toastify';
import ScanCode from '../../ScanCode';
import deviceTestService from './deviceTest.service';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        padding: theme.spacing(2),
    },
}));

export default function DeviceTest() {
    const classes = useStyles();

    async function scanTicket(data) {
        try {
            const res = await deviceTestService.scanTicket(data)
            if (res) {
                toast(res.message)
            }
        } catch (error) {
            toast(error.response.data.message)
        }
    }

    return (
        <Paper elevation={24} className={classes.root} >
            <ScanCode width={'100%'} height={'100vh'} scanTicket={scanTicket}/>
        </Paper>
    )
}