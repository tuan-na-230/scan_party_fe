import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SystemAlert from '../../../SystemAlert';
import Account from '../../Account';
import DashBoard from '../../DashBoard';

function Main () {
    let { path } = useRouteMatch();
    return (
        <div style={{ padding: '30px 0',backgroundColor: '#F4F6F8'}}>
            <SystemAlert />
            <Switch>
              <Route exact path={`${path}/`} component={Account} />
              <Route path={`${path}/event`} component={Event} />
              <Route path={`${path}/account`} component={Account} />
            </Switch>
        </div>
    )
}

export default Main