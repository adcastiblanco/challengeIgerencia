import React from 'react';

import {HeaderContainer, MenuList, MenuItem, LogoImage, AnchorItem} from './styles'

import Logo from '../../assets/static/igerencia-logo.png'

const Header = () => {
    let validationPathname = (window.location.pathname === '/levers-and-objectives' || window.location.pathname === '/add-levers-and-objectives')
    return(
    <HeaderContainer>
        <figure>
            <LogoImage src={Logo} alt="Logo de igerencia SAS"/>
        </figure>
        <nav>
            {!validationPathname ? 
            <MenuList>
                <MenuItem>
                    <AnchorItem to="/">Inicio</AnchorItem>
                </MenuItem>
                <MenuItem>
                    <AnchorItem to="/services">Servicios</AnchorItem>
                </MenuItem>
                <MenuItem>
                    <AnchorItem to="/our-team">Nuestro Personal</AnchorItem>
                </MenuItem>
                <MenuItem>
                    <AnchorItem to="/add-levers-and-objectives">Palancas y objetivos</AnchorItem>
                </MenuItem>
                <MenuItem>
                    <AnchorItem to="/help">Ayuda</AnchorItem>
                </MenuItem>
        </MenuList>
             :
             <MenuList>
                 {window.location.pathname === "/levers-and-objectives" ? 
                    <MenuItem>
                        <AnchorItem to="/add-levers-and-objectives">Añadir registros</AnchorItem>
                    </MenuItem> :
                     <MenuItem>
                        <AnchorItem to="/levers-and-objectives">Ver Registros</AnchorItem>
                    </MenuItem>
                }
                    <MenuItem>
                        <AnchorItem to="/">Salir</AnchorItem>
                    </MenuItem>
            </MenuList>
        }
        </nav>
    </HeaderContainer>
)
}

export default Header;
