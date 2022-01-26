import { useParams } from "react-router-dom";

import { useCategoryInfo } from "../../hooks/useCategoryInfo";
import { seriesTemplate } from "./seriesTemplate";
import { Spinner } from "../loading/Spinner";


export const MarvelSeriesDetail = () => {

    const { container , id , category} = useParams();
    const { heroes , loading } = useCategoryInfo(container , id , category);
    return (
        <>
            {
                loading
                ? <Spinner></Spinner>
                :
                <section className="container mt-5 series-screen">
                    <div className="row">
                        {
                            heroes.map(heroe => seriesTemplate(heroe))
                        }
                    </div>
                </section>
            }
        </>
    );
}