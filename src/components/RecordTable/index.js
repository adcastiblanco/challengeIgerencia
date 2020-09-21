import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { deleteEntry } from '../../actions';

import Swal from 'sweetalert2';

import { AddButton, NoRegistersTitle } from './styles';

import FilterTable from '../FilterTable';
import TableFields from '../TableFields';

const RecordTable = ({ entries, deleteEntry }) => {
  const [entriesData, setEntriesData] = useState(entries); // All entries
  const [filteredRecords, setFilteredRecords] = useState([]); // Entries filtered of form
  const [dataForm, setDataForm] = useState({ type: 'none', year: 'none' }); // data form of filter

  // variable that stores the entries to be displayed on the screen
  let printedEntries =
    filteredRecords.length !== 0 ? filteredRecords : entriesData;

  useEffect(() => {
    printedEntries =
      filteredRecords.length !== 0 ? filteredRecords : entriesData;
  }, []);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteEntry = (idEntry) => {
    printedEntries = printedEntries.filter((item) => idEntry !== item.id); // Delete entries of entries displayed in screen
    let remainingEntries = entriesData.filter((item) => idEntry !== item.id); // Delete entries of all entries
    setEntriesData(remainingEntries);
    setFilteredRecords(printedEntries);
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

    let endResult = [];
    switch (filterConditionals) {
      case 'Print Types':
        endResult = entries.filter((item) => item.type === type);
        setFilteredRecords(endResult);
        break;

      case 'Print Years':
        endResult = entries.filter((item) => item.year == year);
        setFilteredRecords(endResult);
        break;

      case 'Print Beetwen':
        endResult = entries.filter(
          (item) => item.type === type && item.year == year
        );
        setFilteredRecords(endResult);
        break;

      case 'Print All':
        setFilteredRecords([]);
        break;

      default:
        break;
    }
    if (endResult.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontró algún registro',
      });
    }
  };

  if (printedEntries.length !== 0) {
    return (
      <>
        <FilterTable handleChange={handleChange} handleSubmit={handleSubmit} />
        <TableFields
          printedEntries={printedEntries}
          handleDeleteEntry={handleDeleteEntry}
        />
      </>
    );
  }
  return (
    <>
      <NoRegistersTitle>No tienes registros</NoRegistersTitle>
      <AddButton to="/add-levers-and-objectives">¡Agrega uno nuevo!</AddButton>
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
