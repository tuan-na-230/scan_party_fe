import { AppBar, makeStyles, Paper, Tab, Tabs, Grid, Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import ScanCode from '../../ScanCode';
import StoreItem from './StoreItem';
import Pagination from '@material-ui/lab/Pagination';
import storeService from './storeService';
import { toast } from 'react-toastify';
import ItemImage from './ItemImage';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        padding: theme.spacing(2),
    },
    tab: {
        marginBottom: theme.spacing(2)
    },
    pagination: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

export default function Store() {
    const classes = useStyles();
    const [viewMode, setViewMode] = React.useState(false);
    const [listExcel, setListExcel] = React.useState([]);
    const [listImage, setListImage] = React.useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        getlistExcel();
        getlistImage();
    }, [])

    async function getlistExcel() {
        try {
            const listExcel = await storeService.getFileExcel(user._id);
            setListExcel(listExcel);
        } catch (error) {
            toast(error.response.data.message);
        }
    }

    async function getlistImage() {
        try {
            const listImage = await storeService.getFileImage(user._id);
            setListImage(listImage);
        } catch (error) {
            toast(error.response.data.message);
        }
    }

    return (
        <Paper elevation={24} className={classes.root} >
            <Grid container className={classes.tab}>
                <Grid item lg={6} xs={12}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={viewMode}
                            onChange={() => { setViewMode(!viewMode) }}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Excel" />
                            <Tab label="Image" />
                        </Tabs>
                    </AppBar>
                </Grid>
            </Grid>
            {viewMode
                ? <Box>
                    {listExcel.map(ele => (
                        <StoreItem data={ele} />
                    ))}
                </Box>
                : <Box>
                    {listImage.map(ele => (
                        <ItemImage data={ele} />
                    ))}
                </Box>}
            <Box className={classes.pagination}>
                <Pagination count={10} shape="rounded" />
            </Box>

        </Paper>
    )
}