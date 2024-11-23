
import { Link } from 'react-router-dom';
import '../../css/home-css.css'
import '../../css/home_css.css'
import content from "../../data/content_br.json"

function Navbar(){
    return (
        <div className="header">
            <div className="container">
                <h1>
                    {content.nav.title}
                </h1> 
            </div>
            <div className="nav">
            <ul>
                <li>
                    <Link to={"/"}>
                        <img src={content.nav.link_criatura.img} alt=""/> 
                        {content.nav.link_home.description}
                    </Link>
                </li>
                <li>
                    <Link to={"/criaturas"}>
                        <img src={content.nav.link_criatura.img} alt=""/> 
                        {content.nav.link_criatura.description}
                    </Link>
                </li>
                <li>
                    <Link to={"/conversor"}>
                        <img src={content.nav.link_conversor.img} alt=""/> 
                        {content.nav.link_conversor.description}
                    </Link>
                </li>
                <li>
                    <Link to={"/inscricao"}>
                        <img src={content.nav.link_inscricao.img} alt=""/>
                        {content.nav.link_inscricao.description}
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Navbar