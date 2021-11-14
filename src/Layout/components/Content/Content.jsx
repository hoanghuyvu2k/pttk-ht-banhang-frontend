import React from "react";
import routes from "../../../routes";
import { Redirect, Route, Switch } from "react-router-dom";
function Content() {
  return (
    <div>
      <Switch>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        })}
        <Redirect from="/" to="/Cart" />
      </Switch>
    </div>
  );
}

export default Content;
