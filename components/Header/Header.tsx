import React from 'react';

import { Link } from 'react-scroll';
import { StyledHeader, Ul, Li, StyledAnchor, Logo } from './Header.styled';






export const Header: React.FC = ({
    ...props
}) => {
    return (
        <>
            <StyledHeader
            {...props}>
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
                    </Ul>
                    <Link to="domov" spy={true} smooth={true} duration={1000}>
                        <Logo>
                            Samuel Slivoš
                        </Logo>
                    </Link>
            </StyledHeader>
        </>
    );
};
