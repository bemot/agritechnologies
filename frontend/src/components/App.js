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

import { Provider } from "react-redux";
import store from "../store";

function Operations() {
  return (
    <Switch>
      <Route exact path="/" component={OperationDashboard} />
      <Route exact path="/delete/:id" component={OperationDelete} />
      <Route exact path="/edit/:id" component={OperationEdit} />
    </Switch>
  );
}

function Technologies() {
  return (
    <Switch>
      <Route exact path="/" component={TechnologieDashboard} />
      <Route exact path="/delete/:id" component={TechnologieDelete} />
      <Route exact path="/edit/:id" component={TechnologieEdit} />
    </Switch>
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Technologies />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
