import '../../css/home-css.css'
import '../../css/home_css.css'
import { Card } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"


function Portfolio({title, description, imgSrc}){
    return <>
            <Card.Root size="lg" width="50vh" margin="20px" backgroundColor="black">
                <Card.Body>
                    <Image src={imgSrc} height="200px" fit="contain" rounded="md"/>
                    <Card.Title mt="2">{title}</Card.Title>
                    <Card.Description>{description}</Card.Description>
                </Card.Body>
            </Card.Root>
        </>
}

export default Portfolio