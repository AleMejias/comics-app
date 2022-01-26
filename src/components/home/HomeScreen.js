
import { NavLink } from "react-router-dom";

export const HomeScreen = () => {
    return(
        <section className="container-fluid mt-5 home-screen animate__animated animate__fadeIn" >
            <div className="row">
                <div className="col-12 col-md-12 px-0 home-screen__backgroundContainer">
                    
                </div>
                <div className="home-screen__titleContainer animate__animated animate__fadeInDown px-0">
                    <div className="home-screen__titleContainer--text">
                        <h1>Bienvenido a mi pequeño mundo de Marvel Comics</h1>
                        <p>Te invito a visitar el contenido que tengo para tí</p>
                        <div className="home-screen__titleContainer--links">
                            <NavLink
                                to={'/marvel'}
                            >
                                Personajes
                            </NavLink>
                            <NavLink
                                to={'/comics'}
                            >
                                Historietas
                            </NavLink>
                            <NavLink
                                to={'/series'}
                            >
                                Series
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}