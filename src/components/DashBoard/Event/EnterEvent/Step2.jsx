import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FastField, Form, Formik } from 'formik';
import { SPTextField } from '../../../form_field';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Grid,
  makeStyles
} from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';
import PanToolIcon from '@material-ui/icons/PanTool';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useTranslation } from 'react-i18next';
import readXlsxFile from 'read-excel-file';
import _, { set } from 'lodash'
import eventService from '../eventService';
import { toast } from 'react-toastify';
import { Upload, Check } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  uploadButton: {
    marginBottom: theme.spacing(3)
  },
  checkIcon: {
    marginLeft: '1rem',
    padding: '5px',
    backgroundColor: '#757de8',
    borderRadius: '50%'
  }
}));

export default function Step2({ handleUpload, dataStep2 }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [showIconSuccess, setShowIconSuccess] = React.useState(false)

  async function readFileExcel(e) {
    const file = e.target.files[0];
    const item = await uploadFileExcel(file);
    readXlsxFile(file).then((rows) => {
      const keys = rows.shift();
      const data = rows.map((element) => _.zipObject(keys, element));
      handleUpload(data, {...item});
      setShowIconSuccess(true)
    })
  }

  async function uploadFileExcel(file) {
    const user = JSON.parse(localStorage.getItem('user'));
    let fd = new FormData();
    fd.append("file", file);
    fd.append("id", user._id);
    fd.append("type", "excel")
    try {
      const res = await eventService.uploadFileExcel(fd);
      if (res) {
        toast(res.message);
        return res.data
      }
    } catch (error) {
      toast(error.response.data.message)
    }
  }

  return (
    < React.Fragment >
      <Typography variant="h6" gutterBottom>
        Thông tin Khách mời
      </Typography>
      <Typography variant="subtitle1">
        Tải thông tin người dùng từ excel file
      </Typography>
      <Box htmlFor="upload-photo" component="label">
        <Button color="primary" variant="contained" component="span" className={classes.uploadButton}>
          <Upload /> {t('upload_excel_file')}
        </Button>
          {showIconSuccess && <Check className={classes.checkIcon}/>}
        <input
          style={{ display: 'none' }}
          id="upload-photo"
          type="file"
          accept=".xlsx"
          onChange={readFileExcel}
        />
      </Box>
      <Typography variant="subtitle1">
        Tạo form đăng kí trực tuyến
      </Typography>
      <Button color="primary" variant="contained"><ListAltIcon /> {t('create_registration_form')}</Button>
    </React.Fragment >
  );
}