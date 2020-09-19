import React from 'react';

import {Form, Container, TypeContainer, ContainerFlex, RegisterDate, RegisterDescription, InputDescription, SubmitButton} from './styles'

const FormLeversObjectives = () => {
    return (
        <Container>
            <h2>Añadir registro</h2>
            <Form>
                <ContainerFlex>
                    <TypeContainer>
                        <input type="radio" id="lever" name="type" htmlFor="type" value="lever" />
                        <label htmlFor="lever">Palanca</label>
                    </TypeContainer>
                    <TypeContainer>
                        <input type="radio" id="objective" name="type" htmlFor="type" value="objective" />
                        <label htmlFor="objective">Objetivo</label>
                    </TypeContainer>
                </ContainerFlex>
                <RegisterDate>
                    <label htmlFor="date">¿A que año pertenece el registro?</label>
                    <input id="date" type="number" placeholder="YYYY" min="2020" max="2100" />
                </RegisterDate>
                <RegisterDescription>
                    <label htmlFor="description">Describa la palanca/objetivo</label>
                    <InputDescription id="description" placeholder="Escriba una descripción..."/>
                </RegisterDescription>
                <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
        </Container>
    );
}

export default FormLeversObjectives;