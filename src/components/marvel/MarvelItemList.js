
import { useState } from "react";

import { NavLink } from "react-router-dom";

import { BsFillArrowRightCircleFill  } from "react-icons/bs";

export const MarvelItemList = ({ heroe , index}) => {
    const [ collapse , setCollapse ] = useState(false);

    const handleCardView = (index) => {
        const divs = document.querySelectorAll(".marvel-screen__card");
        let card = divs[index];

        if(!card.classList.contains("show-card")){
            card.classList.remove("hide-card");
            card.classList.add("show-card");
        }else{
            card.classList.remove("show-card");
            card.classList.add("hide-card");
        }
    }

    return (
        <>
            <div 
                className="card col-10 col-sm-5 col-md-5 col-lg-5 col-xl-5 marvel-screen__card"
            >
                <img src={ heroe.image } className="card-img-top" alt={ heroe.name }/>
                <div className="marvel-screen__card-back" id="collapseExample">
                    <h5 className="card-title">{ heroe.name }</h5>
                    <ul className="list-group">
                    { heroe.comics === 0 && heroe.series === 0 ? "Informacíon no disponible" : ""}
                        <NavLink
                            to = { `/MarvelComicsDetail/characters/${ heroe.id }/comics` }
                            style={ heroe.comics === 0 ? {display:"none"} : {display:"block"} }
                        >
                            <li 
                                className="list-group-item my-1 d-flex justify-content-between align-items-center"
                                title="Ver Historietas"
                            >
                                Historietas
                                <span className="badge bg-primary rounded-pill">{ heroe.comics }</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to={ `/MarvelSeriesDetail/characters/${ heroe.id }/series` }
                            style={ heroe.comics === 0 ? {display:"none"} : {display:"block"} }
                        >
                            <li 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                title="Ver Series"
                            >
                                Series
                                <span className="badge bg-primary rounded-pill">{ heroe.series }</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <BsFillArrowRightCircleFill
                    className="" type="button"
                    onClick={() => {
                            setCollapse(!collapse)
                            handleCardView(index);
                        }
                    }
                    style={collapse ? {right:"-25px",bottom:"-20px"} : { left:"-25px",bottom:"-20px" } }
                    title={collapse ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                >
                </BsFillArrowRightCircleFill>
            </div>
        </>
    );
}