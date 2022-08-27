import React from 'react';
import { Link } from 'react-scroll';
import { StyledHeader, Ul, Li, StyledAnchor, Logo } from './Header.styled';
import TurnMenu from '../TurnMenu/Turn';

export const Header: React.FC = () => {
    return (
        <>
            <StyledHeader>
                <TurnMenu />
                <Ul>
                    <Link to="domov" spy={true} smooth={true} duration={1000}>
                        <Li>
                            <StyledAnchor>DOMOV</StyledAnchor>
                        </Li>
                    </Link>
                    <Link to="o-mne" spy={true} smooth={true} duration={1000}>
                        <Li>
                            <StyledAnchor>O MNE</StyledAnchor>
                        </Li>
                    </Link>
                    <Link to="kontakt" spy={true} smooth={true} duration={1000}>
                        <Li>
                            <StyledAnchor>KONTAKT</StyledAnchor>
                        </Li>
                    </Link>
                    <Link to="projekty" spy={true} smooth={true} duration={1000}>
                        <Li>
                            <StyledAnchor>PROJEKTY</StyledAnchor>
                        </Li>
                    </Link>
                </Ul>
                <Link to="domov" spy={true} smooth={true} duration={1000}>
                    <Logo>Samuel Slivoš</Logo>
                </Link>
            </StyledHeader>
        </>
    );
};
