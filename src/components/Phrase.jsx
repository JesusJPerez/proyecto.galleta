
const Phrase= ({data}) => {

    return(
        <div className="article">
            <h1 className="title">Galletas De la Fortuna </h1>
            <article className="papel">
                
                <span className="data">{data.phrase}</span>
            </article>
        </div>
    )
}

export default Phrase