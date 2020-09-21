import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
`;

export const RowTable = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const HeadData = styled.th`
  text-align: center;
  border: 1px solid #dddddd;
`;

export const BodyData = styled.td`
  text-align: left;
  border: 1px solid #dddddd;
  padding: 5px 0;
  text-align: center;
  color: #222831;
  &.trash,
  &.edit {
    cursor: pointer;
    font-size: 1.2em;
  }
  &.description {
    text-align: left;
  }
`;
