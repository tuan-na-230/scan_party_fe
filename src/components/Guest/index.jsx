import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import GuestTopBar from './GuestTopBar';
import { Aperture as ScanIcon, UserPlus as AddIcon } from 'react-feather'
import EventInfo from './EventInfo';
import PopUpCheckTicket from './ScanTicket';
import GuestForm from './GuestForm';

const useStyles = makeStyles(({
    root: {},
    content: {
        marginTop: '64px'
    },
    headerImage: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px'
    }
}));

function Guest() {
    const classes = useStyles();
    const [isShowPopupScan, setShowPopupScan] = useState(false);
    const [isShowForm, setShowForm] = useState(false);
    return (
        <>
            <GuestTopBar />
            {isShowPopupScan && <PopUpCheckTicket isShow={isShowPopupScan} setShow={setShowPopupScan} />}
            <Container maxWidth="md" className={classes.content}>
                <Box>
                    <img
                        src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/05_2019/tao-dang-chup-anh-6.jpg"
                        className={classes.headerImage}
                    />
                </Box>
                {isShowForm ? <GuestForm onBack={() => {setShowForm(false)}}/> : <EventInfo />}
                {!isShowForm && <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<ScanIcon />}
                            onClick={() => { setShowPopupScan(true) }}
                        >
                            Kiểm tra vé
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            endIcon={<AddIcon />}
                            onClick={() => { setShowForm(true) }}
                        >
                            Đăng kí tham gia
                        </Button>
                    </Grid>
                </Grid>}
            </Container>
        </>
    )
}

export default Guest;