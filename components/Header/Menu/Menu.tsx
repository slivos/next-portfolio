import React from 'react';
import { StyledMenu, MenuContainer } from './Menu.styled';

export interface MenuProps {
    open: boolean
   };


export const Menu: React.FC<MenuProps> = ({ open, ...props }) => {
    return(
      <MenuContainer open={open}>  
        <StyledMenu open={open} {...props}>
            <a href="/">
                DOMOV
            </a>
            <a href="/">
                O MNE
            </a>
            <a href="/">
                KONTAKT
            </a> 
        </StyledMenu>
      </MenuContainer>
    )
};
