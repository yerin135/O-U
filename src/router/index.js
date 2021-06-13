import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Settings from '../pages/Settings';
import Diary from '../pages/Diary';
import Calender from '../pages/Calender';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/diary" component={Diary} />
      <Route exact path="/calender" component={Calender} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
