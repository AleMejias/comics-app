import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/home',{
            replace: true
        });
    }

    return (
        <section className="container login-screen">
            <div className="row">
                <div className=" col-12 col-md-12 col-lg-12 col-xl-12 login-screen__title">
                    <h1>Hace click para ingresar</h1>
                    <button
                        className="btn btn-primary"
                        onClick={ handleLogin }
                        title="Ingresar a la aplicación"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </section>
    );
}