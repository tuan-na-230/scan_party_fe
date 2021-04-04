import { Box, Paper, Typography, makeStyles, Grid, Link, Avatar } from '@material-ui/core';
import React from 'react';
import { FileText, Download, Eye } from 'react-feather';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        '&:hover': {
            cursor: 'pointer'
        }
    },
    image: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    name: {
        fontWeight: '500'
    },
    icon: {
        fontSize: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function ItemImage({ data }) {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container>
                <Grid item xs={3} lg={1} className={classes.icon}>
                    <Avatar variant="square" alt={data.name} src={`${process.env.REACT_APP_API_URL}/uploads/images/${data.name}`} className={classes.image}/>
                </Grid>
                <Grid item xs={3} lg={10}>
                    <Typography variant="h5" className={classes.name}>
                        {data.name}
                    </Typography>
                    <Typography component="subtitle1" >
                        {data.dateCreated}
                    </Typography>
                </Grid>
                <Grid item xs={1} lg={1} className={classes.icon}>
                    <Link href={data.path} target="_blank"><Eye size={32} /></Link>
                </Grid>
            </Grid>
        </Paper>
    )
}