import React, {useState} from 'react';
import {connect} from 'react-redux'

import {deleteEntry} from '../../actions'

import {Table, HeadData, BodyData, RowTable, AddButton, NoRegistersTitle} from './styles'
import Modal from '../Modal'

import {FaTrashAlt} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'


const RecordTable = ({entries, deleteEntry}) => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [dataModal, setDataModal] = useState({})

    const handleOpenModal = (id, year, type, description) => {
        setIsOpenModal(true)
        setDataModal({id, year, type, description})
    }

    const handleDeleteEntry = (idEntry) =>{
        deleteEntry(idEntry)
    }

    if(entries.length === 0){
        return (
         <>
            <NoRegistersTitle>No tienes registros</NoRegistersTitle>
            <AddButton to="/add-levers-and-objectives">¡Agrega uno nuevo!</AddButton>
        </>
        )
    }
    return (
        <>
            <h2>Todos los registros</h2>
            <h4>Filtrar registros por:</h4>
            <div>
                <label>Tipo:</label>
                <select name="type">
                    <option value="none">Ninguno</option>
                    <option value="objective">Objetivo</option>
                    <option value="lever">Palanca</option>
                </select>
                <label>Año:</label>
                <input id="date" type="number" placeholder="YYYY" min="2020" max="2100" />
                <button>Buscar</button>
            </div>
            <Table>
                <thead>
                    <RowTable>
                        <HeadData>id</HeadData>
                        <HeadData>Año</HeadData>
                        <HeadData>Tipo</HeadData>
                        <HeadData>Descripción</HeadData>
                        <HeadData>Editar</HeadData>
                        <HeadData>Eliminar</HeadData>
                    </RowTable>
                </thead>
                <tbody>
                {entries.map(item => (
                    <RowTable key={item.id}>
                        <BodyData>{item.id}</BodyData>
                        <BodyData>{item.year}</BodyData>
                        <BodyData>{item.type}</BodyData>
                        <BodyData>{item.description}</BodyData>
                        <BodyData onClick={() => handleOpenModal(item.id, item.year, item.type, item.description)} className="edit"><FaEdit /></BodyData>
                        <BodyData onClick={() => handleDeleteEntry(item.id)} className="trash"><FaTrashAlt /></BodyData>
                    </RowTable>
                ))}
                </tbody>
                <Modal isOpen={isOpenModal} handleModal={setIsOpenModal} id={dataModal.id} year={dataModal.year} type={dataModal.type} description={dataModal.description}/>
            </Table>
        </>
    );
}

const mapStateToProps = ({entries}) =>({
    entries
})

const mapDispatchToProps = {
    deleteEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordTable);