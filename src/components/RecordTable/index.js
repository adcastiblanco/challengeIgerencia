import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { deleteEntry } from '../../actions';

import Swal from 'sweetalert2';

import {
  Table,
  HeadData,
  BodyData,
  RowTable,
  AddButton,
  NoRegistersTitle,
} from './styles';
import Modal from '../Modal';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const RecordTable = ({ entries, deleteEntry }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [dataEntries, setDataEntries] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [dataForm, setDataForm] = useState({ type: 'none', year: 'none' });

  let printedEntries = dataFilter.length !== 0 ? dataFilter : dataEntries;

  useEffect(() => {
    setDataEntries(entries);
    printedEntries = dataFilter.length !== 0 ? dataFilter : dataEntries;
  }, []);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenModal = (id, year, type, description) => {
    setIsOpenModal(true);
    setDataModal({ id, year, type, description });
  };

  const handleDeleteEntry = (idEntry) => {
    printedEntries = printedEntries.filter((item) => idEntry !== item.id);
    let remainingEntries = dataEntries.filter((item) => idEntry !== item.id);
    setDataEntries(remainingEntries);
    setDataFilter(printedEntries);
    deleteEntry(idEntry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { type, year } = dataForm;
    var filterConditionals =
      type !== 'none' && (year === '' || year === 'none')
        ? 'Print Types'
        : (year === '' || year === 'none') && type === 'none'
        ? 'Print All'
        : year !== 'none' && type === 'none'
        ? 'Print Years'
        : year && type
        ? 'Print Beetwen'
        : 'default';

    let filteredEntries = [];
    switch (filterConditionals) {
      case 'Print Types':
        filteredEntries = entries.filter((item) => item.type === type);
        setDataFilter(filteredEntries);
        break;

      case 'Print Years':
        filteredEntries = entries.filter((item) => item.year == year);
        setDataFilter(filteredEntries);
        break;

      case 'Print Beetwen':
        filteredEntries = entries.filter(
          (item) => item.type === type && item.year == year
        );
        setDataFilter(filteredEntries);
        break;

      case 'Print All':
        setDataFilter([]);
        break;

      default:
        break;
    }
    if (filteredEntries.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontró algún registro',
      });
    }
  };

  if (printedEntries.length === 0) {
    return (
      <>
        <NoRegistersTitle>No tienes registros</NoRegistersTitle>
        <AddButton to="/add-levers-and-objectives">
          ¡Agrega uno nuevo!
        </AddButton>
      </>
    );
  }
  return (
    <>
      <h2>Todos los registros</h2>
      <h4>Filtrar registros por:</h4>
      <div>
        <label>Tipo:</label>
        <form onSubmit={handleSubmit}>
          <select name="type" onChange={handleChange}>
            <option value="none">Ninguno</option>
            <option value="Objetivo">Objetivo</option>
            <option value="Palanca">Palanca</option>
          </select>
          <label htmlFor="year">Año:</label>
          <input
            id="year"
            name="year"
            onChange={handleChange}
            type="number"
            placeholder="YYYY"
            min="2020"
            max="2100"
          />
          <button type="submit">Buscar</button>
        </form>
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
          {printedEntries.map((item) => (
            <RowTable key={item.id}>
              <BodyData>{item.id}</BodyData>
              <BodyData>{item.year}</BodyData>
              <BodyData>{item.type}</BodyData>
              <BodyData>{item.description}</BodyData>
              <BodyData
                onClick={() =>
                  handleOpenModal(
                    item.id,
                    item.year,
                    item.type,
                    item.description
                  )
                }
                className="edit"
              >
                <FaEdit />
              </BodyData>
              <BodyData
                onClick={() => handleDeleteEntry(item.id)}
                className="trash"
              >
                <FaTrashAlt />
              </BodyData>
            </RowTable>
          ))}
        </tbody>
        <Modal
          isOpen={isOpenModal}
          handleModal={setIsOpenModal}
          id={dataModal.id}
          year={dataModal.year}
          type={dataModal.type}
          description={dataModal.description}
        />
      </Table>
    </>
  );
};

const mapStateToProps = ({ entries }) => ({
  entries,
});

const mapDispatchToProps = {
  deleteEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordTable);
