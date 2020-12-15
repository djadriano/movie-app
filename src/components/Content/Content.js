import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './Content.scss';

import Home from '../../pages/Home';
import Episode from '../../pages/Episode';

const Content = () => (
  <section className="content">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/episode/:slug">
          <Episode />
        </Route>
      </Switch>
    </Router>
  </section>
);

export default Content;
