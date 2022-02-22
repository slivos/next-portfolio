import React from 'react';
import { MenuContainer, MenuItem, MenuUl } from './Menu.styled';
import { Link } from 'react-scroll';

export interface MenuProps {
    open?: boolean;
    show?: boolean;
    closed?: () => void;
}

const Menu = (props: MenuProps) => {
    return (
        <MenuContainer open={props.open}>
            <MenuUl>
                <Link onClick={props.closed} to="domov" spy={true} smooth={true} duration={1000}>
                    <MenuItem>DOMOV</MenuItem>
                </Link>
                <Link onClick={props.closed} to="o-mne" spy={true} smooth={true} duration={1000}>
                    <MenuItem>O MNE</MenuItem>
                </Link>
                <Link onClick={props.closed} to="kontakt" spy={true} smooth={true} duration={1000}>
                    <MenuItem>KONTAKT</MenuItem>
                </Link>
                <Link onClick={props.closed} to="projekty" spy={true} smooth={true} duration={1000}>
                    <MenuItem>PROJEKTY</MenuItem>
                </Link>
            </MenuUl>
        </MenuContainer>
    );
};

export default Menu;
