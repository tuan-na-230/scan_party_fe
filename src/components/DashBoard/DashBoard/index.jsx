import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        // paddingTop: theme.spacing(3)
    },
    titleHeader: {
        fontSize: 24
    },
    listEvent: {
        width: '100%',
        padding: theme.spacing(3),
        marginTop: theme.spacing(3)
    }
}));

function DashBoard() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <p>dash board</p>
            <p>dash board</p>
            <p>dash board</p>
            <p>dash board</p>
            <p>dash board</p>
            <p>dash board</p>
        </Box>
    )
}

export default DashBoard