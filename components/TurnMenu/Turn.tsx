import React, { useState } from 'react';
import { Turn } from 'hamburger-react';
import { TurnWrapper } from './Turn.styled';
import Menu from '../Header/Menu/Menu';

const TurnMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <TurnWrapper>
                <Turn toggled={open} toggle={() => setOpen(!open)} />
            </TurnWrapper>
            <Menu open={open} closed={handleClose} />
        </>
    );
};

export default TurnMenu;
