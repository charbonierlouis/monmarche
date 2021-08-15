import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import _routes from "../constants/routes";
import HomeScreen from "../screens/HomeScreen";
import MoovieScreen from "../screens/MoovieScreen";

export default () => (
  <Router>
    <Switch>
      <Route exact path={_routes.Home}>
        <HomeScreen />
      </Route>
      <Route path={_routes.Moovie}>
        <MoovieScreen />
      </Route>
    </Switch>
  </Router>
);
