import React, { useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import Modal from '../Modal';

import { Table, HeadData, BodyData, RowTable } from './styles';

const TableFields = ({ printedEntries, handleDeleteEntry }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleOpenModal = (id, year, type, description) => {
    setIsOpenModal(true);
    setDataModal({ id, year, type, description });
  };
  return (
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
            <BodyData className="description">{item.description}</BodyData>
            <BodyData
              onClick={() =>
                handleOpenModal(item.id, item.year, item.type, item.description)
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
  );
};
export default TableFields;
