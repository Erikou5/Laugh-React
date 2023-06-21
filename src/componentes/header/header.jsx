import "./header.css"
import { Carrito } from '../carrito/carrito'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand tituloNb" to="/">Laugh Tale's Store</Link>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="true" aria-expanded="false">Productos</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/productos/Figuras">Figuras</Link>  {/* aca le doy el nombre a las categorias de los parametros de la url */}
                                    <Link className="dropdown-item" to="/productos/Juegos">Juegos</Link>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/nosotros">Nosotros</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <Carrito />
            </nav>
        </header >)
}