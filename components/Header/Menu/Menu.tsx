import React from 'react';
import { StyledMenu, MenuContainer } from './Menu.styled';

export interface MenuProps {
    open: boolean
   };



export function Menu (props: MenuProps): React.ReactElement {

    return(
      
      <MenuContainer open={props.open}>
        <StyledMenu open={props.open}>
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
