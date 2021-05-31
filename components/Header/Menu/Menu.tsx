import React from 'react';
import { StyledMenu, MenuContainer, MenuLink } from './Menu.styled';

export interface MenuProps {
    open: boolean

   };


export function Menu (props: MenuProps): React.ReactElement {


    return (
      
      <MenuContainer open={props.open}>
        <StyledMenu open={props.open}>
            <MenuLink to="domov" spy={true} smooth={true} duration={1000}>
                DOMOV
            </MenuLink>
            <MenuLink to="o-mne" spy={true} smooth={true} duration={1000}>
                O MNE
            </MenuLink>
            <MenuLink to="kontakt" spy={true} smooth={true} duration={1000}>
                KONTAKT
            </MenuLink> 
        </StyledMenu>
      </MenuContainer>
    )
};
