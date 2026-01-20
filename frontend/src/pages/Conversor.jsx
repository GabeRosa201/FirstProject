import { Box, Text, Container, Heading, Stack, HStack, Field} from '@chakra-ui/react';
import '../css/conversor.css'
import { Button } from '@chakra-ui/react';
import { NumberInput} from "@chakra-ui/react"

function converterParaReais(){
    console.log("Vou converter para reais");
}

function converterDinheiroBruxo(){
    console.log("Vou converter vou converter para dinheiro bruxo");
}

function Conversor(){
    return <>
        <Container style={{textAlign: "center", justifyItems:"center"}}>
            <Box style={{marginTop: "2%", marginBottom: "2%", width:"max-content"}}>
                <Text backgroundColor="black" borderRadius="12px" p="5" variant="h2">Conversor de Moedas</Text>
            </Box>
        </Container>
        
        <Container className="texto">
            <Box >
                <Text>
                    No mundo bruxo tudo é diferente, incluseive o próprio dinheiro. 
                    Pra você que quer saber quanto dinheiro trouxa precisa ou ao contrário 
                    Basta verificar abaixo:
                </Text>
            </Box>
        </Container>

        <Container>
            <HStack>
                <Box backgroundColor="black">
                <Heading size="4xl">Bruxo para Trouxa</Heading>
                <Stack>
                    {/* Input das moedas de ouro */}
                    <Field.Root>
                        <Field.Label>
                            Galeão
                        </Field.Label>
                            <NumberInput.Root defaultValue="10" width="200px">
                            {/* <NumberInput.Control /> */}
                            <NumberInput.Input />
                        </NumberInput.Root>
                    </Field.Root>

                    {/* Input das moedas de prata */}
                    <Field.Root>
                        <Field.Label>
                            Sicles
                        </Field.Label>
                            <NumberInput.Root defaultValue="10" width="200px">
                            {/* <NumberInput.Control /> */}
                            <NumberInput.Input />
                        </NumberInput.Root>
                    </Field.Root>
                    
                </Stack>
                <Button variant="ghost" onClick={converterParaReais} >Converter</Button>
            </Box>
                <Box backgroundColor="black">
                    <Heading size="4xl">Trouxa para Bruxo</Heading>
                    <Stack>
                        <NumberInput.Root defaultValue="10" width="200px">
                            {/* <NumberInput.Control /> */}
                            <NumberInput.Input />
                        </NumberInput.Root>
                    </Stack>
                    <Button variant="ghost" onClick={converterParaReais} >Converter</Button>
                </Box>
            </HStack>
            
            
        </Container>

        <div className="conversores">
            <div className="box">
                <h3>Bruxo para Trouxa</h3> 
                <p>
                    Galeão: <input id="valor_galeao" type="text"/> <br/>
                    Sicles : <input id="valor_sicle" type="text"/> <br/>
                    Nuquel: <input id="valor_nuquel" type="text"/> <br/>
                    <Button variant="ghost" onClick={converterParaReais} >Converter</Button>
                </p>
                <p id="valor_real">
                </p>
            </div>
            <div className="box">
                <h3>Trouxa para Bruxo</h3>
                <p>
                    Quantos reais você possui: <br/>
                    <input id="valor_reais" placeholder="R$" type="text"/> <br/>
                    <button onClick={converterDinheiroBruxo}>Converter</button>
                </p>
                <p id="valor_bruxo">
                </p>
            </div>
        </div>
    </>
}

export default Conversor;