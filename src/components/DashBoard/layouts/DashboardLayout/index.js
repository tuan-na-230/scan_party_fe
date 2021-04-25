import React, { useState } from 'react';
import { Box, makeStyles, Paper } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from './Main';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Paper className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      
      <Box className={classes.wrapper}>
        <Box className={classes.contentContainer}>
          <Box className={classes.content}>
            <Main />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default DashboardLayout;
