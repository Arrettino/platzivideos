import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import NotFound from '../container/NotFound';
import '../assets/styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
