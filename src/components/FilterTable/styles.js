import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  width: 30%;
  font-weight: bold;
  justify-content: space-around;
  font-style: italic;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
  background-color: #00adb5;
  color: white;
  border: 1px solid darkgray;
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    background-color: #393e46;
  }
  :focus {
    outline: none;
  }
`;
