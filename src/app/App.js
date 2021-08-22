import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { GetRoutes } from './Routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router>
            <Switch>
              {GetRoutes().map(route => (
                <Route
                  key={route.path || 'nopath'}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
