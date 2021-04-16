import { Box, Button, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import usePaginationAsync from '../../hook/usePaginationAsync';
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
    },
    listEvent: {
        width: '100%',
        padding: theme.spacing(3),
        marginTop: theme.spacing(3)
    }
}));

function Event() {
    const classes = useStyles();
    const [showEnterValue, setShowEnterForm] = useState(false);
    const history = useHistory();
    const {t} = useTranslation()

    useEffect(() => {
        getListEvent()
    }, []);

    const {
        Pagination,
        loading,
        fetchData,
        onChange,
        data,
    } = usePaginationAsync({ apiService: getListEvent, pageSizeDefault: 10 });

    async function getListEvent(params) {
        try {
            const listEvent = await eventService.getListEvent(params);
            if (listEvent) {
                return listEvent
            }
        } catch (error) {
            toast(error.response.data.message)
        }
        return null;
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
                            {t('your_event')}
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
                <Paper elevation={3} className={classes.listEvent}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {data.map(ele => (
                            <Grid
                                item
                                lg={4}
                                md={3}
                                xs={12}
                                key={ele._id}
                               
                            >
                                <EventItem data={ele} />
                            </Grid>
                        ))}
                        <Box style={{width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Pagination />
                        </Box>
                    </Grid>
                </Paper>

            </Container>
        </>
    )
}

export default Event