import React from 'react';
import {connect} from 'react-redux'

import {deleteEntry} from '../../actions'

import {FaTrashAlt} from 'react-icons/fa'

import {Table, HeadData, BodyData, RowTable} from './styles'

const RecordTable = ({entries, deleteEntry}) => {
    const handleDeleteEntry = (idEntry) =>{
        deleteEntry(idEntry)
    }
    return (
        <section id="contain">
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
                        <BodyData>Edit</BodyData>
                        <BodyData onClick={() => handleDeleteEntry(item.id)} className="trash"><FaTrashAlt /></BodyData>
                    </RowTable>
                ))}
                </tbody>
            </Table>
        </section >
    );
}

const mapStateToProps = ({entries}) =>({
    entries
})

const mapDispatchToProps = {
    deleteEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordTable);