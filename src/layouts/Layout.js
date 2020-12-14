import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const Layout = () => (
  <Router>
    <main>
      <Switch>
        <Route path="/episode/:slug">
          <h1>Episodes</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </main>
  </Router>
);

export default Layout;
