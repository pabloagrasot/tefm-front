import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Ejercicios } from './ejercicio/Ejercicios';
import { Acceso } from './acceso/Acceso';
import { Alumnos } from './alumnos/Alumnos';
import { Menu } from './menu/Menu';
import { Home } from './home/Home';
import { Contacto } from './contacto/Contacto';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/ejercicios/' component={Ejercicios}/>
          <Route path='/acceso/' component={Acceso}/>
          <Route path='/alumnos/' component={Alumnos}/>
          <Route path='/contacto/' component={Contacto}/>  
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
