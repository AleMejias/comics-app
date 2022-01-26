
export const getMarvelElementsById = async ( container , id , category ) => {
    const url = `https://gateway.marvel.com:443/v1/public/${container}/${id}/${category}?ts=1&apikey=088488524f5bdac95f57adcbe1dc40d8&hash=6f56817e585f64d2da921a9698709cc8`;
    const request = await fetch(url);
    const { data: {results} } = await request.json();
    let result;

    const heroeInfo = results.map((heroe) => {
        switch(category){
            case 'comics':
                result = {
                    id: heroe.id,
                    title: heroe.title,
                    image: `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`,
                    creators: heroe.creators.items,
                    creatorsAvailables : heroe.creators.available
                }
                break;
            default:
                result = {
                    id: heroe.id,
                    title: heroe.title,
                    image: `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`,
                    creators: heroe.creators.items,
                    creatorsAvailables : heroe.creators.available,
                    comics : heroe.comics.available
                }
        }
        return result;
    });

    return heroeInfo;
}