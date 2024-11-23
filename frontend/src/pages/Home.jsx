import Portfolio from '../components/site/portfolio'
import content from '../data/content_br.json'

function Home(){
    return <>
        <Portfolio title={content.page_home.localizacao.title}  
            description={content.page_home.localizacao.description} imgSrc={content.page_home.localizacao.img}></Portfolio>

        <Portfolio title={content.page_home.protecao.title} 
            description={content.page_home.protecao.description} imgSrc={content.page_home.protecao.img}></Portfolio>

        <Portfolio title={content.page_home.estudantes.title} 
            description={content.page_home.estudantes.description} imgSrc={content.page_home.estudantes.img}></Portfolio>

        <Portfolio title={content.page_home.destaque.title} 
            description={content.page_home.destaque.description} imgSrc={content.page_home.destaque.img}></Portfolio>
    </>
}

export default Home