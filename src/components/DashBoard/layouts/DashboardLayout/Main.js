import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SystemAlert from '../../../SystemAlert';
import Account from '../../Account';
import DashBoard from '../../DashBoard';
import DeviceTest from '../../DeviceTest';
import Event from '../../Event'

function Main () {
    let { path } = useRouteMatch();
    console.log(path)
    return (
        <div style={{ padding: '24px 0',backgroundColor: '#F4F6F8', minHeight: '100vh'}}>
            <SystemAlert />
            <Switch>
              <Route path={`${path}/`} component={DashBoard} />
              <Route path={`${path}event`} component={Event} />
              <Route path={`${path}account`} component={Account} />
              <Route path={`${path}device-test`} component={DeviceTest} />
            </Switch>
        </div>
    )
}

export default Main