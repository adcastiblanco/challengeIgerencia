import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #00adb5;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  margin: 0;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin: 0 10px;
`;

export const LogoImage = styled.img`
  max-width: 250px;
`;

export const AnchorItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;
