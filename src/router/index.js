import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Settings from '../pages/Settings';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/settings" component={Settings} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
