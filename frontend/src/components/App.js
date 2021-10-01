import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Header from "./layout/Header";

import OperationDelete from "./technologies/operation/OperationDelete";
import OperationEdit from "./technologies/operation/OperationEdit";
import OperationDashboard from "./technologies/operation/OperationDashboard";

import TechnologieDelete from "./technologies/technologie/TechnologieDelete";
import TechnologieEdit from "./technologies/technologie/TechnologieEdit";
import TechnologieDashboard from "./technologies/technologie/TechnologieDashboard";

import VariableDelete from "./technologies/variable/VariableDelete";
import VariableEdit from "./technologies/variable/VariableEdit";
import VariableDashboard from "./technologies/variable/VariableDashboard";

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
            <Route exact path="/variables" component={VariableDashboard} />
            <Route
              exact
              path="/variables/delete/:id"
              component={VariableDelete}
            />
            <Route exact path="/variables/edit/:id" component={VariableEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
