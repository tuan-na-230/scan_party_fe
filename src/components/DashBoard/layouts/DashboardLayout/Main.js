import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SystemAlert from '../../../SystemAlert';
import Account from '../../Account';
import DashBoard from '../../DashBoard';
import DeviceTest from '../../DeviceTest';
import Event from '../../Event'
import EventDetail from '../../Event/EventDetail';
import Store from '../../Store'

function Main () {
    let { path } = useRouteMatch();
    console.log(path)
    return (
        <div style={{ padding: '24px 0',backgroundColor: '#F4F6F8', minHeight: '100vh'}}>
            <SystemAlert />
            <Switch>
              <Route path={`${path}event/:eventId`} component={EventDetail} />
              <Route path={`${path}event`} component={Event} />
              <Route path={`${path}account`} component={Account} />
              <Route path={`${path}device-test`} component={DeviceTest} />
              <Route path={`${path}store`} component={Store} />
              <Route path={`${path}/`} component={DashBoard} />
            </Switch>
        </div>
    )
}

export default Main