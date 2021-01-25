import { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import App from '../App'

export const Menu: FC = () => {
  
  return (
    <BrowserRouter>
    <header className="header">

        <input className="check-click" type="checkbox" />
    
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>

        <nav className="menu">
            <Link to="/">Inicio</Link>
        </nav>

    </header>

        <Route path="/"><App /></Route>

    </BrowserRouter>
  )
}