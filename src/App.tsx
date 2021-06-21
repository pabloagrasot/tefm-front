import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { Ejercicios } from './ejercicio/Ejercicios';
import { Acceso } from './acceso/Acceso';
import { Alumnos } from './alumnos/Alumnos';
import { Menu } from './menu/Menu';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/'/>
          <Route path='/ejercicios/' component={Ejercicios}/>
          <Route path='/acceso/' component={Acceso}/>
          <Route path='/alumnos/' component={Alumnos}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
