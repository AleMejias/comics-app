import { useCategoryInfo } from "../../hooks/useCategoryInfo";
import { Spinner } from "../loading/Spinner";
import { MarvelItemList } from "./MarvelItemList";


export const MarvelScreen = () => {

    const { heroes , loading } = useCategoryInfo('characters', null , 'characters');
    return(
        <>
            {
                loading 
                ?
                <Spinner></Spinner>
                :
                <section className="container mt-5 marvel-screen">
                    <div className="row mx-0">
                        {
                            heroes.map((heroe,index) => <MarvelItemList key = { heroe.id } heroe = { heroe }  index = { index } />)
                        }
                    </div>
                </section> 
            }
        </>
    );
}