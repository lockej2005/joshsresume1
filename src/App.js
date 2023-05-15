import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file
import Home from './home';
import Resume from './resume';
import Day from './day';
import Admin from './admin';
import routes from './routes.json';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={getElement(route.component)} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;

function getElement(component) {
  const components = {
    Home,
    Resume,
    Day,
    Admin,
  };

  return components[component];
}
