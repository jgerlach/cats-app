import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import { Cats } from './Cats';
import { Login } from './Login';
import { Signup } from './Signup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Cats />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
