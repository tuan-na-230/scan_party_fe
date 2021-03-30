import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Upload, Check } from 'react-feather';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        position: 'relative',
        height: 300,
        padding: '2rem',
        color: 'white',
        textAlign: 'center',
        fontSize: '13px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    control: {
        padding: theme.spacing(2),
    },
    qrCode: {
        width: 64,
        height: 64
    },
    checkIcon: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        marginLeft: '1rem',
        backgroundColor: '#757de8',
        borderRadius: '50%'
    }
}));

export default function ItemStep3({ data, selected, handleSelect, dataStep1 }) {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper} elevation={selected && selected._id === data._id ? 12 : 3} onClick={() =>{handleSelect && handleSelect(data)}}
                style={{ backgroundImage: `url("${data.backgroundUrl}")` }}>
                <Box >
                    {selected && selected._id === data._id && <Check className={classes.checkIcon} />}
                    <Typography variant="p" component="h3" gutterBottom>
                        Sự kiện: {`${dataStep1 && dataStep1.name}` || 'Chào đón tân sinh viên'}
                    </Typography>
                    <Typography variant="p" component="p" gutterBottom>
                        Địa điểm: {`${dataStep1 && dataStep1.address}` || 'Nhà Văn Hóa Quận Hai Bà Trưng'}
                    </Typography>
                    <Typography variant="p" component="p" gutterBottom>
                        Thời gian: {`${dataStep1 && dataStep1.beginTime} ${dataStep1 && dataStep1.endTime}` || '12:00 12:00'}
                    </Typography>
                    <Typography variant="p" component="p" gutterBottom>
                        Kính mời: Nguyễn Văn A
                </Typography>
                    <img className={classes.qrCode} src="https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" alt="qrcode"></img>
                </Box>
            </Paper>
        </>
    )
}