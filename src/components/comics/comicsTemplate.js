

export const comicsTemplate = ( heroe ) => {
    const { creators } = heroe;
    let creatorStyle;
    return (
        <div key={ heroe.id } className="card col-11 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4 comics-screen__card">
            <div className="row g-0">
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 h-100">
                    <img 
                        src={ heroe.image } 
                        className="img-fluid rounded-start" 
                        alt={ heroe.title }
                    />
                </div>
                <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                    <div className="card-body comics-screen__card--text">
                        <h5 className="card-title">{ heroe.title }</h5>
                        <h6>{ heroe.creatorsAvailables < 2 ? 'Creador' : 'Creadores' }</h6> 
                            {
                                heroe.creatorsAvailables === 0
                                ? creatorStyle = 'No disponible'
                                :
                                creators.map((creator,index) => {
                                        index >  -1  && index < heroe.creatorsAvailables-1 ? creatorStyle = creator.name + ' , '
                                        : creatorStyle = creator.name
                                        return creatorStyle
                                    }
                                )
                            }.
                    </div>
                </div>
            </div>
        </div>
    )
}