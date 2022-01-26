
export const getCategoryInfo = async ( category ) => {
    const url = `http://gateway.marvel.com/v1/public/${category}?ts=1&apikey=088488524f5bdac95f57adcbe1dc40d8&hash=6f56817e585f64d2da921a9698709cc8`;
    const request = await fetch(url);
    const { data: {results} } = await request.json();
    let result;

    const heroeInfo = results.map( (heroe) => {

        switch(category){
            case 'characters':
                result = {
                    id : heroe.id,
                    name : heroe.name,
                    image: `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`,
                    comics : heroe.comics.available,
                    series : heroe.series.available
                }
                break;
            case 'comics':
                result = {
                    id : heroe.id,
                    title : heroe.title,
                    image: `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`,
                    creators: heroe.creators.items,
                    creatorsAvailables : heroe.creators.available
                }
                break;
            case 'series':
                result = {
                    id : heroe.id,
                    title : heroe.title,
                    image: `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`,
                    comics: heroe.comics.available
                }
                break;
            default:
                console.log("No existe la categoria");

        }
         return result;
    });
    return heroeInfo;
}