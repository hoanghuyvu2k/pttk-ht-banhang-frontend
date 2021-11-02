import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
const Login = React.lazy(() => import("./view/Login"));
const Layout = React.lazy(() => import("./Layout"));
const loading = <div>Loading</div>;
function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />

          <Route
            path="/"
            name="Home"
            render={(props) => <Layout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
