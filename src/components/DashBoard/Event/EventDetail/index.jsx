import { Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import SPPagination from '../../../common/pagination';
import eventService from '../eventService';
import EventDetailTable from './EventDetailTable';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    titleHeader: {
        fontSize: 24
    }
}));

function EventDetail() {
    const classes = useStyles();
    const params = useParams();

    const [detailEvent, setDetailEvent] = useState([])

    useEffect(() => {
        getDetailEvent()
    }, [])

    async function getDetailEvent() {
        try {
            const res = await eventService.getDetailEvent(params.eventId);
            console.log(res)
            setDetailEvent(res)
        } catch (error) {
            toast(error.response.data.message)
        }
    }

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10)

    function onChangeRowsPerPage(e) {
        setSize(e.target.value)
    }

    function onChangePage(e, newPage) {
        setPage(newPage)
    }

    return (
        <>
            <Box className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item lg={6} xs={12}>
                        <Paper elevation={3} className="p-1" >
                            <Typography variant="h5">Event Information</Typography>
                            <Grid container>
                                <Grid item lg={11} spin>
                                    <Typography>Tên sự kiện: {detailEvent.name}</Typography>
                                </Grid >
                                <Grid item lg={11}>
                                    <Typography>Địa điểm: {detailEvent.address}</Typography>
                                </Grid>
                                <Grid item lg={11}>
                                    <Typography>Đơn vị tổ chức: {detailEvent.company}</Typography>
                                </Grid>
                                <Grid item lg={11}>
                                    <Typography>Thời gian bắt đầu: {moment(detailEvent.time?.beginTime).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
                                </Grid>
                                <Grid item lg={11}>
                                    <Typography>Thời gian kết thúc: {moment(detailEvent.time?.endTime).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Paper elevation={3} className="p-1">
                            <Typography variant="h5">Management Information</Typography>
                            <Grid container>
                                <Grid item lg={11} spin>
                                    <Typography>Người quản lý: {detailEvent.manager?.name}</Typography>
                                </Grid >
                                <Grid item lg={11}>
                                    <Typography>Số điện thoại: {detailEvent.manager?.phoneNumber}</Typography>
                                </Grid>
                                <Grid item lg={11}>
                                    <Typography>Địa chỉ email: {detailEvent.manager?.email}</Typography>
                                </Grid>
                                <Grid item lg={11}>
                                    <Typography>facebook: {detailEvent.manager?.facebook}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <Paper elevation={3} className="p-1">
                            <Typography variant="h5">Management Information</Typography>
                            <EventDetailTable eventId={params.eventId}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default EventDetail