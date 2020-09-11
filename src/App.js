import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from './components/Background';
import Main from './components/pages/Main';
import NotFound from './components/pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Background />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
