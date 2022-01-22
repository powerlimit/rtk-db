import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import {Provider} from "react-redux";
import {store} from "store";
import Users from "pages/users";
import Todos from "pages/todos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
      <Router>
        <Provider store={store}>
          <ToastContainer />
          <Switch>
            <Route exact path="/todos">
              <Todos />
            </Route>
            <Route exact path="/">
              <Users />
            </Route>
          </Switch>
        </Provider>
      </Router>
    );
}

export default App;
