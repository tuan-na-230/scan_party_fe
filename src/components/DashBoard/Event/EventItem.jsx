import { Box, Button, Container, Grid, makeStyles, Paper, Tooltip, Typography, LinearProgress } from '@material-ui/core';
import React from 'react';
import ticket from '../../../assets/images/ticket.png';
import chat from '../../../assets/images/chat.png';
import {
    BookOpen as BookIcon,
    Clock as ClockIcon
} from 'react-feather'
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        minHeight: '100%',
        width: '100%',
        height: '200px',
        '&:hover': {
            cursor: 'pointer'
        }
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
        textAlight: 'center',
        minWidth: '100%'
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

function EventItem({ data }) {
    const classes = useStyles();

    function showLessDate(time) {
        const beginTime = moment(time.beginTime).format("MM/DD/YY");
        const endTime = moment(time.endTime).format("MM/DD/YY");
        const now = moment()
        const dayRemain = -now.diff(beginTime, "days");
        if(dayRemain > 0) {
            return `${dayRemain} ngày còn lại`;
        }
        if(dayRemain == 0) {
            const hourRemain = -now.diff(beginTime, "hours");
            if(hourRemain > 0) {
                return `${hourRemain} giờ còn lại`;
            }
            if(hourRemain === 0) {
                return `Đang diễn ra`;
            }
            if(hourRemain < 0) {
                return 'Đã tổ chức'
            }
        }
        if(dayRemain < 0) {
            return 'Đã tổ chức'
        }
        
    }

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
                                {data.name || 'sự kiện chào mừng tân sinh viên'}
                            </Typography>
                            <Typography
                                color="textPrimary"
                                gutterBottom
                                align="center"
                                className={classes.addressEvent}
                            >
                                {data.address || 'Ba Đình, Hà Nội'}
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
                                <span>{data && showLessDate(data.time)}</span>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}

export default EventItem