import React from 'react';

import styled from 'styled-components'

import backgroundImage from '../assets/static/building.jpg'
import { FaCog } from "react-icons/fa";

const Container = styled.section`
    background-image: url('${backgroundImage}');
    background-size: cover;
`

const PageText = styled.h1`
    background:rgba(000, 000, 000, .6);
    margin:0;
    height: 100%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 30px;
`

const Building = () => {
    return (
        <Container>
            <PageText>
            <FaCog />Pagina en construccion...
            </PageText>
        </Container>
    );
}

export default Building;
