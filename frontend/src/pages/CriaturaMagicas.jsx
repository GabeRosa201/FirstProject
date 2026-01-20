import '../css/criaturas.css'
import { Box, Text, Container} from '@chakra-ui/react';


function CriaturasMagicas(){
    return <>
        <Container style={{textAlign: "center", justifyItems:"center"}}>
            <Box style={{marginTop: "2%", marginBottom: "2%", width:"max-content"}}>
                <Text backgroundColor="black" borderRadius="12px" p="5" variant="h2">Criaturas Mágicas</Text>
            </Box>
        </Container>

        <div className="conteudo">
            
            <div className="catalogo">
                <img src="../Imagens/hipogrifo.jpg" alt=""/>
                <h3>hipogrifo</h3>
                <p>
                    O Hipogrifo pode até ser perigoso até certo ponto, mas aparentemente tem um grande senso de respeito e lealdade
                </p>
            </div>

            <div className="catalogo">
                <img src="../Imagens/Pelucio.png" alt=""/>
                <h3>Pelucio</h3>
                <p>
                    Pelúcio é uma criaturinha simpática com grande apreço por ouro e objetos brilhantes, e muito usado para localizar tesouros. 
                </p>
            </div>

            <div className="catalogo">
                <img src="../Imagens/tronquilho.jpg" alt=""/>
                <h3>tronquilho</h3>
                <p>
                    Tronquilhos tem grande apreço pela natureza, e usam sua forma para camuflagem em árvores e arbustos.
                </p>
            </div>

            <div className="catalogo">
                <img src="../Imagens/dragao.jpg" alt=""/>
                <h3>Dragão</h3>
                <p>Capazes de voar e cuspir fogo através de suas narinas e bocas, são uma das mais perigosas e mais difíceis de esconder no mundo mágico.</p>
            </div>

            <div className="catalogo">
                <img src="../Imagens/fenix.jpg" alt=""/>
                <h3>Fênix</h3>
                <p>Além de ser um ótimo companheiro para a vida toda, a Fênix carrega em si um significado poderoso de resistência e revitalização. </p>
            </div>

            <div className="catalogo">
                <img src="../Imagens/unicornio.jpg" alt=""/>
                <h3>Unicórnio</h3>
                <p>Símbolos de pureza e bondade, são criaturas conhecidas no mundo inteiro, tanto dos bruxos quanto dos trouxas. </p>
            </div>

        </div>
    </>
}

export default CriaturasMagicas;