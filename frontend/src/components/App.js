import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Header from "./layout/Header";
import Dashboard from "./technologies/Dashboard";
import OperationDelete from "./technologies/OperationDelete";
import OperationEdit from "./technologies/OperationEdit";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/delete/:id" component={OperationDelete} />
            <Route exact path="/edit/:id" component={OperationEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
