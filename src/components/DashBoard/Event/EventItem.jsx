import { Box, Button, Container, Grid, makeStyles, Paper, Tooltip, Typography, LinearProgress } from '@material-ui/core';
import React from 'react';
import ticket from '../../../assets/images/ticket.png';
import chat from '../../../assets/images/chat.png';
import {
    BookOpen as BookIcon,
    Clock as ClockIcon
} from 'react-feather'

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.dark,
        display: 'block',
        minHeight: '100%',
        width: '100%',
        height: '200px'
        // margin: theme.spacing(8),
    },
    wrapper: {
        position: 'relative',
    },
    wrapIconTop: {
        display: 'flex',
        justifyContent: 'center',
    },
    IconTop: {
        height: '50px',
        width: '50px',
        borderRadius: '12px',
        backgroundColor: 'red',
        zIndex: '999',
        boxShadow: '0px 8px #ddd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        position: 'absolute',
        top: '25px',
        paddingTop: theme.spacing(3),
        padding: theme.spacing(1),
        textAlight: 'center'
    },
    nameEvent: {
        fontSize: 18,
        fontWeight: '600',
        padding: '12px 50px 0px 50px',
        margin: 'auto'
    },
    addressEvent: {
        paddingTop: '8px',
        fontSize: 13,
        fontWeight: '400',
        textAlign: 'center',
        margin: 'auto'
    },
    footer: {
        marginTop: theme.spacing(2),
    },
    dateLeft: {
        borderRadius: '15px',
        backgroundColor: '#ddd',
        fontWeight: '500',
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        AlignItems: 'center'
    }
}));

function EventItem() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.wrapper}>
                <Box className={classes.wrapIconTop}>
                    <Box color="primary" variant="contained" className={classes.IconTop}>
                        <BookIcon style={{ color: 'white' }} />
                    </Box>
                </Box>
                <Paper elevation={4} className={classes.content} >
                    <Grid container>
                        <Grid item md={12}>
                            <Typography
                                color="textPrimary"
                                gutterBottom
                                variant="h4"
                                align="center"
                                className={classes.nameEvent}
                            >
                                sự kiện chào mừng tân sinh viên
                            </Typography>
                            <Typography
                                color="textPrimary"
                                gutterBottom
                                align="center"
                                className={classes.addressEvent}
                            >
                                Ba Đình, Hà Nội
                            </Typography>
                        </Grid>
                    </Grid>
                    <LinearProgress variant="determinate" value={50} />
                    <Grid container className={classes.footer}>
                        <Grid item md={6} xs={6}>
                            <img src={ticket} />
                            <span>123</span>
                            <img src={chat} />
                            <span>123</span>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <Box className={classes.dateLeft}>
                                <ClockIcon />
                                <span>6 ngày còn lại</span>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}

export default EventItem