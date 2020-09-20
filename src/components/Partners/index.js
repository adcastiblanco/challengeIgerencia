import React from 'react';

import { Container, Title, ImageContainer, Image } from './styles';

import PartnerLogos from '../../assets/static/Logos.png';

const Partners = () => {
  return (
    <Container>
      <Title>Nuestros Partners Tecnologicos</Title>
      <ImageContainer>
        <Image src={PartnerLogos} alt="logos de partners tecnologicos" />
      </ImageContainer>
    </Container>
  );
};

export default Partners;
