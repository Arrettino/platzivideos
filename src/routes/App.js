import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import '../assets/styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;
