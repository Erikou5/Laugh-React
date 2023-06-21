import "./header.css"
import { Carrito } from '../carrito/carrito'

export const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand tituloNb" href="./index.html">Laugh Tale's Store</a>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="true" aria-expanded="false">Productos</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Figuras</a>
                                    <a className="dropdown-item" href="#">Juegos</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <Carrito/>
            </nav>
        </header >)
}