import React, {useState} from 'react';
import {createPortal} from 'react-dom'
import {connect} from 'react-redux'

import {editEntry} from '../../actions'

import Swal from 'sweetalert2'

import {ModalContainer, 
        ModalContain,
        Form, 
        RegisterField,
        InputDescription, 
        SubmitButton,
        QuestionLabel,
        ModalHeadContainer} from './styles'

import {FaTimes} from 'react-icons/fa'
const Modal = ({isOpen, handleModal, id, year, type, description, editEntry}) => {
    const [form, setForm] = useState({type, year, description})
    const handleCloseModal = () => handleModal(false)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log(form)
        e.preventDefault()
        editEntry({
            id, 
            type: form.type, 
            year: form.year, 
            description: form.description
        })     
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Entrada editada',
            showConfirmButton: false,
            timer: 800
        })
    }

    if(!isOpen) {
        return null
    }
    return (
        createPortal(
            <ModalContainer>
                <ModalContain>
                    <ModalHeadContainer>
                        <h2>Editar registro</h2>
                        <FaTimes onClick={handleCloseModal} className="close-modal"/>
                    </ModalHeadContainer>
                   <Form onSubmit="jeje" onSubmit={handleSubmit}>
                        <RegisterField>
                            <QuestionLabel>¿De que tipo es?</QuestionLabel>
                                <select name="type" onChange={handleChange}>
                                    {type === "Objetivo" ?
                                    <>
                                        <option name="type" defaultValue="Objetivo">Objetivo</option>
                                        <option name="type" defaultValue="Palanca">Palanca</option>
                                    </>:
                                    <>
                                        <option name="type" defaultValue="Palanca">Palanca</option>
                                        <option name="type" defaultValue="Objetivo">Objetivo</option>
                                    </>
                                }
                                </select>
                        </RegisterField>
                        <RegisterField>
                            <QuestionLabel htmlFor="year">¿A que año pertenece el registro?</QuestionLabel>
                            <input required id="year" defaultValue={year} name="year" type="number" placeholder="YYYY" min="2020" max="2100" onChange={handleChange}/>
                        </RegisterField>
                        <RegisterField>
                            <QuestionLabel htmlFor="description">Describa la palanca/objetivo</QuestionLabel>
                            <InputDescription required id="description" defaultValue={description} name="description"  placeholder="Escriba una descripción..." onChange={handleChange}/>
                        </RegisterField>
                        <SubmitButton type="submit">Editar registro</SubmitButton>
                    </Form>
                </ModalContain>
            </ModalContainer>,
            document.getElementById('edit-modal')
        )
    );
}

const mapDispatchToProps = {
    editEntry
}

export default connect(null, mapDispatchToProps)(Modal)
