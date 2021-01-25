import { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import App from '../App'
import {Ejercicio} from '../ejercicio/Ejercicio'
import './menu.css';
import Logo from '../img/logo.png';

export const Menu: FC = () => {
  
  return (
    <BrowserRouter>

    <header className="header">
      <div>
        <input className="check-click" type="checkbox" />
    
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>

        <nav className="menu">
            <img src={Logo} className="logo" alt="logo" />
            <Link to="/">Inicio</Link>
            <Link to="/ejercicio/">Ejercicio</Link>
        </nav>
      </div>
    </header>
    <Route path="/">
        <App />
      </Route>
    <Route path="/ejercicio/">
        <Ejercicio />
    </Route>
        

    </BrowserRouter>
  )
}

