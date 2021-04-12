import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Box, Paper, Grid, Link } from '@material-ui/core';
import ItemStep3 from './ItemStep3';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 300,
    padding: '2rem',
  },
  Typography: {
    fontSize: '13px'
  },
  ticket: {
    height: 300,
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
    fontSize: '13px',
  },
  qrCode: {
    width: 64,
    height: 64
  }
}));

export default function Step4({ dataStep1, dataStep2, dataStep3, infoExcel }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" component="h3" gutterBottom>
        Kiểm tra
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={4} xs={12}>
            <Paper className={classes.paper}  elevation={12} >
              <Typography variant="h6" gutterBottom>
                Thông tin sự kiện
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Tên: {dataStep1.name}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Địa chỉ: {dataStep1.address}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                thời gian bắt đầu: {dataStep1.beginTime}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Thời gian kết thúc: {dataStep1.endTime}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Quản lý: {dataStep1.manager}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Đơn vị tổ chức: {dataStep1.company}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Email: {dataStep1.email}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Facebook: {dataStep1.facebook}
              </Typography>
              <Typography variant="h6" component="h3" className={classes.Typography}>
                Số điện thoại: {dataStep1.phoneNumber}
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12} >
            <Paper className={classes.paper}  elevation={12} >
              <Typography variant="h6" component="h3" gutterBottom>
                Danh sách khách mời
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom>
                <Link href={infoExcel ? `${infoExcel.path}` :"#"} onClick={() => console.log('')}>
                  File
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <ItemStep3 data={dataStep3} dataStep1={dataStep1} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}