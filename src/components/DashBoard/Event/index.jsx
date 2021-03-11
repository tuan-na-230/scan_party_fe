import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import EnterValue from './EnterEvent';
import EventItem from './EventItem';

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
    const [showEnterValue, setShowEnterForm] = useState(false)
    return (
        <>
        {showEnterValue && <EnterValue />}
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
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={3}
                    xs={12}
                >
                    <EventItem />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Event