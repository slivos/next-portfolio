import React from 'react';
import { StyledBurger } from './Burger.styled';


export interface BurgerProps {
    open: boolean,
    setOpen: () => void,
    onClick: () => void
     
    };


export const Burger: React.FC<BurgerProps> = ({ open, setOpen, ...props }) => {

    return(
        <StyledBurger open={open} onClick={() => setOpen(!open)} {...props}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
};
