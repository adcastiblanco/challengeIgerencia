import React from 'react';

import {Container, OurHistory, Title, Contain, ImageContainer, Image, TextContain} from './styles'

import AboutUsImage from '../../assets/static/home-image.png'

const index = () => {
    return (
        <Container>
            <OurHistory>
                <Contain>
                    <Title>¿Quienes somos?</Title>
                    <TextContain>Igerencia es una compañía con más de veinte (20) años en el mercado ofreciendo servicios que satisfacen las necesidades de análisis de información en las organizaciones.</TextContain>
                </Contain>
                <ImageContainer>
                    <Image src={AboutUsImage} alt="caricatura de hombre utilizando tecnologia"/>
                </ImageContainer>
            </OurHistory>
        </Container>
    );
}

export default index;
