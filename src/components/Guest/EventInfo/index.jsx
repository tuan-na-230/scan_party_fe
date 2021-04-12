import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { toast } from 'react-toastify';
import eventService from '../../DashBoard/Event/eventService';
import SystemAlert from '../../SystemAlert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ChatRoom from '../../ChatRoom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: "100%",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    description: {
        margin: theme.spacing(2),
    },
}));


function EventInfo() {
    const { eventId } = useParams();
    const classes = useStyles();

    const [eventInfo, setEventInfo] = useState()

    useEffect(() => {
        eventId && getEventInfo()
    }, [])

    async function getEventInfo() {
        try {
            const res = await eventService.getDetailEvent(eventId);
            setEventInfo(res);
        } catch (error) {
            toast(error.response.data.message);
        }
    }
    function createMarkup () {
        return { __html: eventInfo?.description}
    }

    return (
        <>
            <Paper elevation={3} className="p-1 m-1">
                <Typography variant="h5">Giới thiệu</Typography>
                <div dangerouslySetInnerHTML={createMarkup()} className='editor'></div>
            </Paper>
            <Paper elevation={3} className="p-1 m-1">
                <Typography variant="h5">Event Information</Typography>
                <Grid container>
                    <Grid item lg={11} spin>
                        <Typography>Tên sự kiện: {eventInfo?.name}</Typography>
                    </Grid>
                    <Grid item lg={11}>
                        <Typography>Địa điểm: {eventInfo?.address}</Typography>
                    </Grid>
                    <Grid item lg={11}>
                        <Typography>Đơn vị tổ chức: {eventInfo?.company}</Typography>
                    </Grid>
                    <Grid item lg={11}>
                        <Typography>
                            Thời gian bắt đầu:{" "}
                            {moment(eventInfo?.time?.beginTime).format(
                                "MMMM Do YYYY, h:mm:ss a"
                            )}
                        </Typography>
                    </Grid>
                    <Grid item lg={11}>
                        <Typography>
                            Thời gian kết thúc:{" "}
                            {moment(eventInfo?.time?.endTime).format(
                                "MMMM Do YYYY, h:mm:ss a"
                            )}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={3} className="p-1 m-1">
              <Typography variant="h5">Management Information</Typography>
              <Grid container>
                <Grid item lg={11} spin>
                  <Typography>
                    Người quản lý: {eventInfo?.manager?.name}
                  </Typography>
                </Grid>
                <Grid item lg={11}>
                  <Typography>
                    Số điện thoại: {eventInfo?.manager?.phoneNumber}
                  </Typography>
                </Grid>
                <Grid item lg={11}>
                  <Typography>
                    Địa chỉ email: {eventInfo?.manager?.email}
                  </Typography>
                </Grid>
                <Grid item lg={11}>
                  <Typography>
                    facebook: {eventInfo?.manager?.facebook}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={3} className="p-1 m-1">
                <ChatRoom chatId={eventInfo?.chat}/>
            </Paper>
        </>
    )
}

export default EventInfo;