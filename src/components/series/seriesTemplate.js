
import { NavLink } from "react-router-dom";

export const seriesTemplate = ( heroe ) => {

    return(
        <div key={ heroe.id } className="card col-10 col-sm-9 col-md-8 col-lg-6 col-xl-6 m-3 series-screen__card">
            <img src={ heroe.image } className="card-img h-100" alt={ heroe.title }/>
            <div className="card-img-overlay">
                <h5 className="card-title">{ heroe.title }</h5>
            </div>
            <div className="card-footer">
            <NavLink
                to = { `/MarvelComicsDetail/series/${ heroe.id }/comics` }
            >
                <button
                    type="button"
                    className="btn border"
                    disabled= { heroe.comics === 0 ? true : false }
                >
                    Comics 
                    <span className="badge border">{ heroe.comics }</span>
                </button>
            </NavLink>
            </div>
        </div>
    );
}