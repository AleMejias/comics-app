
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../assets/marvel-logo-navbar.png";
import { HiMenu } from "react-icons/hi";

export const NavBar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/',{
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-md navBar-screen">
            <div className="container-fluid">
                <NavLink 
                    className="navbar-brand navBar-screen__logo mx-0"
                    to="/home" 
                >
                    <img src={ Logo } alt="Marvel Comics"/>
                </NavLink>
                <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <HiMenu className="navbar-toggler-icon navbar-dark"></HiMenu>
                </button>
                <div className="collapse navbar-collapse navBar-screen__menu" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                                className={ ({isActive}) => "nav-link " + (isActive ? 'active' : "") }
                                to="/marvel"
                            >
                                Personajes
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={ ({isActive}) => "nav-link " + (isActive ? 'active' : "") }
                                to="/comics"
                            >
                                Historietas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={ ({isActive}) => "nav-link " + (isActive ? 'active' : "") } 
                                to="/series"
                            >
                                Series
                            </NavLink>
                        </li>
                    </ul>
                    <div className="navBar-screen__menu--logout">
                        <button 
                            className="btn border"
                            onClick={ handleLogout }
                            title="Volver al Login"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}