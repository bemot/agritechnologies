import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Header from "./layout/Header";
import OperationDelete from "./technologies/OperationDelete";
import OperationEdit from "./technologies/OperationEdit";
import OperationDashboard from "./technologies/OperationDashboard";
import TechnologieDelete from "./technologies/TechnologieDelete";
import TechnologieEdit from "./technologies/TechnologieEdit";
import TechnologieDashboard from "./technologies/TechnologieDashboard";
import MainPage from "./technologies/MainPage";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />

            <Route exact path="/operations" component={OperationDashboard} />
            <Route
              exact
              path="/operations/delete/:id"
              component={OperationDelete}
            />
            <Route
              exact
              path="/operations/edit/:id"
              component={OperationEdit}
            />
            <Route
              exact
              path="/technologies"
              component={TechnologieDashboard}
            />
            <Route
              exact
              path="/technologies/delete/:id"
              component={TechnologieDelete}
            />
            <Route
              exact
              path="/technologies/edit/:id"
              component={TechnologieEdit}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
