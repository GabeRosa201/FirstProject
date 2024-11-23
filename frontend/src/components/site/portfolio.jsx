import '../../css/home-css.css'
import '../../css/home_css.css'

function Portfolio({title, description, imgSrc}){
    return <>
            <div className="portifolio">
                <img src={imgSrc} className="img-pequena" alt=""/>
                <h3>{title}</h3> 
                <p>
                    {description} 
                </p>
            </div>
        </>
}

export default Portfolio