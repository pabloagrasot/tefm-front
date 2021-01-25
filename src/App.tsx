import React from 'react';
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import { Ejercicios } from './ejercicio/Ejercicios';
import { Menu } from './menu/Menu';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/'/>
          <Route path='/ejercicios' component={Ejercicios}/>
        </Switch>
      </BrowserRouter>



      <h1>Home</h1>
    </div>
  );
}

export default App;
