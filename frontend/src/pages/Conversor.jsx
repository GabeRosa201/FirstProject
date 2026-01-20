import { Box, Text, Container} from '@chakra-ui/react';
import '../css/conversor.css'

function Conversor(){
    return <>
        <Container style={{textAlign: "center", justifyItems:"center"}}>
            <Box style={{marginTop: "2%", marginBottom: "2%", width:"max-content"}}>
                <Text backgroundColor="black" borderRadius="12px" p="5" variant="h2">Conversor de Moedas</Text>
            </Box>
        </Container>
        
        <div className="texto">
            No mundo bruxo tudo é diferente, incluseive o próprio dinheiro. <br/>
            Pra você que quer saber quanto dinheiro trouxa precisa ou ao contrário <br/>
            Basta verificar abaixo:
        </div>

        <div className="conversores">
            <div className="box">
                <h3>Bruxo para Trouxa</h3> 
                <p>
                    Galeão: <input id="valor_galeao" type="text"/> <br/>
                    Sicles : <input id="valor_sicle" type="text"/> <br/>
                    Nuquel: <input id="valor_nuquel" type="text"/> <br/>
                    <button onclick="converter_1()" >Converter</button>
                </p>
                <p id="valor_real">
                </p>
            </div>
            <div className="box">
                <h3>Trouxa para Bruxo</h3>
                <p>
                    Quantos reais você possui: <br/>
                    <input id="valor_reais" placeholder="R$" type="text"/> <br/>
                    <button onclick="converter_2()">Converter</button>
                </p>
                <p id="valor_bruxo">
                </p>
            </div>
        </div>
    </>
}

export default Conversor;