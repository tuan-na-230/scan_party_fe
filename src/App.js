import './App.css';
import Login from './components/Login';
import '../src/assets/scss/index.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ScanCode from './components/ScanCode';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/scan">
          <ScanCode />
        </Route>
        <Route path="/users">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
