import React from 'react';

import { SearchButton, SearchContainer } from './styles';

const FilterTable = ({ handleSubmit, handleChange }) => (
  <>
    <h2>Todos los registros</h2>
    <h4>Filtrar registros por:</h4>
    <div>
      <SearchContainer onSubmit={handleSubmit}>
        <label>Tipo</label>
        <select name="type" onChange={handleChange}>
          <option value="none">Ninguno</option>
          <option value="Objetivo">Objetivo</option>
          <option value="Palanca">Palanca</option>
        </select>
        <label htmlFor="year">Año</label>
        <input
          id="year"
          name="year"
          onChange={handleChange}
          type="number"
          placeholder="YYYY"
          min="2020"
          max="2100"
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </SearchContainer>
    </div>
  </>
);

export default FilterTable;
