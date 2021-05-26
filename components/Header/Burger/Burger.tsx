import React, { SetStateAction, useState } from 'react';
import { Menu } from '../Menu/Menu';
import { StyledBurger } from './Burger.styled';



export interface BurgerProps {
    open?: boolean,
    setOpen?: React.Dispatch<SetStateAction<boolean>>,
    onClick?: () => void;
     
    };


export function Burger(props: BurgerProps): React.ReactElement { 
    const [open, setOpen] = useState(false); 

    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)} {...props}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <Menu open={open}/>
        </>
    )

    
};
