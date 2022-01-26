import { useCategoryInfo } from "../../hooks/useCategoryInfo";
import { seriesTemplate } from "./seriesTemplate";
import { Spinner } from "../loading/Spinner";

export const SeriesScreen = () => {
    const { heroes , loading } = useCategoryInfo('series' , null , 'series');
    return(
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