import { useParams } from "react-router-dom";
import { useCategoryInfo } from "../../hooks/useCategoryInfo";
import { comicsTemplate } from "./comicsTemplate";
import { Spinner } from "../loading/Spinner";

export const MarvelComicsDetail = () => {
    const { container , id , category } = useParams();
    const { heroes , loading } = useCategoryInfo(container , id ,category);

    return (
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