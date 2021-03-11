import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FastField, Form, Formik } from 'formik';
import { SPTextField } from '../../../form_field';
import { BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';
import PanToolIcon from '@material-ui/icons/PanTool';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default function Step2({ handleSubmit }) {
  const [value, setValue] = React.useState(0);

  return (
    < React.Fragment >
      <Typography variant="h6" gutterBottom>
        Thông tin Khách mời
    </Typography>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        // className={classes.root}
      >
        <BottomNavigationAction label="Upload" icon={<BackupIcon />} />
        <BottomNavigationAction label="Create Form" icon={<ListAltIcon />} />
        <BottomNavigationAction label="hand tool" icon={<PanToolIcon />} />
      </BottomNavigation>
    </React.Fragment >
  );
}