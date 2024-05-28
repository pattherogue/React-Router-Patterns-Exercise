import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/dogs" component={DogList} />
        <Route path="/dogs/:name" component={DogDetails} />
        <Redirect to="/dogs" />
      </Switch>
    </Router>
  );
}

export default App;
