import React from 'react'
import { Grid, Box, Button } from '@material-ui/core';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

function DashBoard() {
    return (
        <Box>
           {/* <MainLayout /> */}
           <DashboardLayout />
        </Box >
    )
}

export default DashBoard

