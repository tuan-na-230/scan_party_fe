import { Box, Button, Container, Grid, makeStyles, Paper, Tooltip, Typography, LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ticket from '../../../assets/images/ticket.png';
import chat from '../../../assets/images/chat.png';
import {
    BookOpen as BookIcon,
    Clock as ClockIcon
} from 'react-feather'
import moment from 'moment';
import eventService from './eventService';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import Rating from '@material-ui/lab/Rating';
import { useTranslation } from 'react-i18next';

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
        // padding: '12px 0px 0px 50px',
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
    },
    rating: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem'
    }
}));

function EventItem({ data }) {
    const classes = useStyles();
    const [count, setCount] = useState();
    const history = useHistory();
    const { t } = useTranslation()

    useEffect(() => {
        data && getCountTicket()
    }, [data])

    function showLessDate(time) {
        const beginTime = moment(time.beginTime).format("MM/DD/YY");
        const endTime = moment(time.endTime).format("MM/DD/YY");
        const now = moment(new Date(), 'MM/DD/YY')
        const dayRemain = -now.diff(beginTime, "minutes");
        if (dayRemain > 0) {
            return { text: 'minute_remaining', minutes: dayRemain };
        }
        if (dayRemain < 0) {
            const timeRemain = now.diff(endTime, "minutes");
            if (timeRemain < 0) {
                return {text: 'happening'}
            }
        }
        return {text: 'happened'}
    }

    function activeLive() {
        const time = data.time;
        const beginTime = moment(time.beginTime).format("MM/DD/YY");
        const endTime = moment(time.endTime).format("MM/DD/YY");
        const now = moment(new Date(), 'MM/DD/YY')
        const dayRemain = -now.diff(beginTime, "minutes");
        if (dayRemain > 0) {
            return false;
        }
        if (dayRemain < 0) {
            const timeRemain = now.diff(endTime, "minutes");
            if (timeRemain < 0) {
                return true
            }
        }
        return false
    }

    function toPageDetailEvent(eventId) {
        const isActiveLive = activeLive();
        isActiveLive ? history.push(`/event/${eventId}/active-live`) : history.push(`/event/${eventId}`);
    }

    async function getCountTicket() {
        try {
            const res = await eventService.getCountTicket(data?._id);
            if (res) {
                setCount(res)
            }
        } catch (error) {
            toast(error.response.data.message)
        }
    }

    function countRating(ratingList = []) {
        const totalRating = ratingList.reduce((accumulator, currentValue) => (
            accumulator + currentValue?.rating
        ), 0)
        const result = Math.ceil(totalRating / ratingList?.length);
        return result;
    }


    return (
        <Box className={classes.root} onClick={() => toPageDetailEvent(data._id)}>
            <Box className={classes.wrapper}>
                <Box className={classes.wrapIconTop}>
                    <Box color="primary" variant="contained" className={classes.IconTop}>
                        <BookIcon style={{ color: 'white' }} />
                    </Box>
                </Box>
                <Paper elevation={4} className={classes.content} >
                    <Grid container>
                        <Grid item md={12}>
                            <Rating
                                name="averageRating"
                                value={countRating(data?.rating?.ratingList)}
                                size="medium"
                                readOnly
                                className={classes.rating}
                            />
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
                    <LinearProgress variant="determinate" value={10} style={{ height: '8px', borderRadius: '8px' }}>
                        100
                    </LinearProgress>
                    <Grid container className={classes.footer}>
                        <Grid item md={6} xs={6}>
                            <img src={ticket} />
                            <span>{count?.countTicket}</span>
                            <img src={chat} />
                            <span>{count?.countMessage}</span>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <Box className={classes.dateLeft}>
                                <ClockIcon />
                                <span>{data && t(showLessDate(data.time).text, {minutes: showLessDate(data.time).minutes})}</span>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}

export default EventItem