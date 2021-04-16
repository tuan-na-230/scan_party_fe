import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SystemAlert from '../../../SystemAlert';
import Account from '../../Account';
import DashBoard from '../../DashBoard';
import DeviceTest from '../../DeviceTest';
import Event from '../../Event'
import ActiveLive from '../../Event/ActiveLive';
import EventDetail from '../../Event/EventDetail';
import Store from '../../Store'
import '../../../../assets/scss/index.scss';

function Main() {
    let { path } = useRouteMatch();
    return (
        <div style={{ padding: '24px 0', backgroundColor: '#F4F6F8', minHeight: '100vh' }}>
            <SystemAlert />
            <Switch>
                <Route path={`${path}event/:eventId/active-live`} >
                    <ActiveLive />
                </Route>
                <Route path={`${path}event/:eventId`} >
                    <EventDetail />
                </Route>
                <Route path={`${path}`} exact>
                    <Event />
                </Route>
                <Route path={`${path}account`} >
                    <Account />
                </Route>
                <Route path={`${path}device-test`}>
                    <DeviceTest />
                </Route>
                <Route path={`${path}store`} >
                    <Store />
                </Route >
            </Switch >
        </div >
    )
}

export default Main