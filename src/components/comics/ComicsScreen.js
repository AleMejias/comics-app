import { useCategoryInfo } from "../../hooks/useCategoryInfo";
import { comicsTemplate } from "./comicsTemplate";
import { Spinner } from "../loading/Spinner";

export const ComicsScreen = () => {
    const { heroes , loading } = useCategoryInfo( 'comics' , null , 'comics' );
    return(
        <>
            {    
                loading
                ? <Spinner></Spinner>
                :
                <section className="container mt-5 comics-screen">
                    <div className="row">
                        {
                            heroes.map(heroe => comicsTemplate(heroe))
                        }
                    </div>
                </section>
            }
        </>
    );
}