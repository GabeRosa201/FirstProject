
import { Link } from 'react-router-dom';
import '../../css/home-css.css'
import '../../css/home_css.css'
import content from "../../data/content_br.json"
import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  Link as ChakraLink
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar(){
    return (
        <Box bg="black" py={4}>
            <Container maxW="container.xl">
                <Box>
                    <Box textAlign="center">
                        <Heading size="6xl" color="#551a8b" letterSpacing="4px" mb={4}>
                            {content.nav.title}
                        </Heading>
                    </Box>
                    
                <HStack spacing={6} justifyContent="space-around" flex="1">
                    <ChakraLink
                    as={RouterLink}
                    to="/"
                    display="flex"
                    alignItems="center"
                    textDecoration="none"
                    gap={2}
                    >
                    <Image
                        h="16px"
                        src={content.nav.link_home.img}
                        alt=""
                    />
                    <Text color="#551a8b" >
                        {content.nav.link_home.description}
                    </Text> 
                    </ChakraLink>

                    <ChakraLink
                    as={RouterLink}
                    to="/criaturas"
                    display="flex"
                    alignItems="center"
                    textDecoration="none"
                    gap={2}
                    className="linkNavBar"
                    >
                    <Image
                        h="16px"
                        src={content.nav.link_criatura.img}
                        alt=""
                    />
                    <Text color="#551a8b">
                        {content.nav.link_criatura.description}
                    </Text>
                    </ChakraLink>

                    <ChakraLink
                        as={RouterLink}
                        to="/conversor"
                        display="flex"
                        alignItems="center"
                        textDecoration="none"
                        gap={2}
                        className="linkNavBar"
                    >
                    <Image
                        h="16px"
                        src={content.nav.link_conversor.img}
                        alt=""
                    />
                    <Text color="#551a8b">
                        {content.nav.link_conversor.description}
                    </Text>
                    
                    </ChakraLink>

                    <ChakraLink
                    as={RouterLink}
                    to="/inscricao"
                    display="flex"
                    alignItems="center"
                    textDecoration="none"
                    gap={2}
                    className="linkNavBar"
                    >
                    <Image
                        h="16px"
                        src={content.nav.link_inscricao.img}
                        alt=""
                    />
                    <Text color="#551a8b">
                        {content.nav.link_inscricao.description}
                    </Text>
                    
                    </ChakraLink>
                </HStack>
                </Box>
            </Container>
        </Box>
    );
}

export default Navbar

{/* <Container style={{maxWidth: "0", width:"100%"}} backgroundColor="black">
            <Box>
                <Heading size="6xl" style={{letterSpacing: "4px"}}>
                    {content.nav.title}
                </Heading> 
                <Stack direction="row" h="1">
                    <Box>
                        <Link className="linkNavBar" style={{display: "flex"}} to={"/"}>
                            <Image height="16px" style={{marginRight: "2%"}} src={content.nav.link_criatura.img} alt=""/> 
                            {content.nav.link_home.description}
                        </Link>
                    </Box>
                    <Box>
                        <Link className="linkNavBar" to={"/criaturas"}>
                            <Image height="16px" style={{marginRight: "2%"}} src={content.nav.link_criatura.img} alt=""/> 
                            {content.nav.link_criatura.description}
                        </Link>
                    </Box>
                    <Box>
                        <Link className="linkNavBar"  to={"/conversor"}>
                            <Image height="16px" style={{marginRight: "2%"}} src={content.nav.link_conversor.img} alt=""/> 
                            {content.nav.link_conversor.description}
                        </Link>
                    </Box>
                    <Box>
                        <Link className="linkNavBar" to={"/inscricao"}>
                            <Image height="16px" style={{marginRight: "2%"}} src={content.nav.link_inscricao.img} alt=""/>
                            {content.nav.link_inscricao.description}
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </Container> */}