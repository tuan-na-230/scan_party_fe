import './App.css';
import Login from './components/Login';
import '../src/assets/scss/index.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ScanCode from './components/ScanCode';
import DashBoard from './components/DashBoard';
import NotFound from './components/NotFound';
import Guest from './components/Guest';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/scan">
          <ScanCode />
        </Route>
        <Route path="/users">
          <Login />
        </Route>
        <Route path="/home">
          <DashBoard />
        </Route>
        <Route path="/guests/:eventId">
          <Guest />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
