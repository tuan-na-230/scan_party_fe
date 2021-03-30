import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import EnterValue from './EnterEvent';
import EventItem from './EventItem';
import eventService from './eventService';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    titleHeader: {
        fontSize: 24
    }
}));

function Event() {
    const classes = useStyles();
    const [showEnterValue, setShowEnterForm] = useState(false);
    const [listEvent, setListEvent] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getListEvent()
    }, [])

    async function getListEvent() {
        try {
            const listEvent = await eventService.getListEvent();
            if (listEvent) {
                console.log(listEvent)
                setListEvent(listEvent)
            }
        } catch (error) {
            toast(error.response.data.message)
        }
    }

    function toPageDetailEvent(eventId) {
        history.push(`/event/${eventId}`)
    }

    return (
        <>
            {showEnterValue && <EnterValue setShowEnterForm={setShowEnterForm} />}
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={9}
                        md={6}
                        xs={12}
                    >
                        <Box component="span" className={classes.titleHeader}>
                            your_event
                    </Box>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        md={6}
                        xs={12}
                    >
                        <Button
                            onClick={() => setShowEnterForm(!showEnterValue)}
                            color="primary" variant="contained" fullWidth>
                            Tạo mới sự kiện
                    </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={3}
                >
                    {listEvent.map(ele => (
                        <Grid
                            item
                            lg={4}
                            md={3}
                            xs={12}
                            key={ele._id}
                            onClick={() => toPageDetailEvent(ele._id)}
                        >
                            <EventItem data={ele}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Event