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

import UnitDelete from "./technologies/unit/UnitDelete";
import UnitEdit from "./technologies/unit/UnitEdit";
import UnitDashboard from "./technologies/unit/UnitDashboard";

import MachineDelete from "./technologies/machine/MachineDelete";
import MachineEdit from "./technologies/machine/MachineEdit";
import MachineDashboard from "./technologies/machine/MachineDashboard";

import PowerunitDelete from "./technologies/powerunit/PowerunitDelete";
import PowerunitEdit from "./technologies/powerunit/PowerunitEdit";
import PowerunitDashboard from "./technologies/powerunit/PowerunitDashboard";

import MainPage from "./technologies/MainPage";
import TechnologieListReport from "./reports/TechnologieListReport";
import OperationListReport from "./reports/OperationListReport";

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

            <Route exact path="/units" component={UnitDashboard} />
            <Route exact path="/units/delete/:id" component={UnitDelete} />
            <Route exact path="/units/edit/:id" component={UnitEdit} />

            <Route exact path="/powerunits" component={PowerunitDashboard} />
            <Route
              exact
              path="/powerunits/delete/:id"
              component={PowerunitDelete}
            />
            <Route
              exact
              path="/powerunits/edit/:id"
              component={PowerunitEdit}
            />

            <Route exact path="/machines" component={MachineDashboard} />
            <Route
              exact
              path="/machines/delete/:id"
              component={MachineDelete}
            />
            <Route exact path="/machines/edit/:id" component={MachineEdit} />

            <Route
              exact
              path="/reports/techs-report"
              component={TechnologieListReport}
            />
            <Route
              exact
              path="/reports/opers-report"
              component={OperationListReport}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
