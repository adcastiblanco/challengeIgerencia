import React, { useState } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import { addEntry } from '../../actions';

import {
  Form,
  Container,
  RegisterField,
  ContainerFlex,
  InputDescription,
  SubmitButton,
  TypeContainer,
  QuestionLabel,
} from './styles';

const FormLeversObjectives = ({ entries, addEntry }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    let nextId = () => {
      let idsResult = entries.map((item) => item.id);
      let organizedIds = idsResult.sort(function (a, b) {
        return a - b;
      });
      let endId = organizedIds[organizedIds.length - 1] + 1;
      return endId;
    };
    setForm({
      ...form,
      id: nextId(),
      [e.target.name]: e.target.value,
    });
  };

  const handleAddRegister = (e) => {
    e.preventDefault();
    let validationDescription = false;
    entries.forEach((item) => {
      if (item.description === form.description) {
        validationDescription = true;
      }
    });
    if (validationDescription) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La palanca u objetivo ya está registrado',
      });
    } else {
      addEntry(form);
      Swal.fire('Perfecto!', '¡Has añadido una palanca u objetivo!', 'success');
    }
  };

  return (
    <Container>
      <h2>Añadir registro</h2>
      <Form onSubmit={handleAddRegister}>
        <RegisterField>
          <QuestionLabel>¿De que tipo es?</QuestionLabel>
          <ContainerFlex>
            <TypeContainer>
              <input
                required
                type="radio"
                id="palanca"
                name="type"
                htmlFor="type"
                value="Palanca"
                onChange={handleChange}
              />
              <label htmlFor="palanca">Palanca</label>
            </TypeContainer>
            <TypeContainer>
              <input
                required
                type="radio"
                id="objetivo"
                name="type"
                htmlFor="type"
                value="Objetivo"
                onChange={handleChange}
              />
              <label htmlFor="objetivo">Objetivo</label>
            </TypeContainer>
          </ContainerFlex>
        </RegisterField>
        <RegisterField>
          <QuestionLabel htmlFor="date">
            ¿A que año pertenece el registro?
          </QuestionLabel>
          <input
            required
            id="date"
            name="year"
            type="number"
            placeholder="YYYY"
            min="2020"
            max="2100"
            onChange={handleChange}
          />
        </RegisterField>
        <RegisterField>
          <QuestionLabel htmlFor="description">
            Describa la palanca/objetivo
          </QuestionLabel>
          <InputDescription
            required
            name="description"
            id="description"
            placeholder="Escriba una descripción..."
            onChange={handleChange}
          />
        </RegisterField>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </Container>
  );
};

const mapStateToProps = ({ entries }) => ({
  entries,
});

const mapDispatchToProps = {
  addEntry,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormLeversObjectives);
