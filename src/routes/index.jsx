import { Route, Switch } from "react-router-dom";
import Build from "../pages/Build";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/build" component={Build} />
    </Switch>
  )
}