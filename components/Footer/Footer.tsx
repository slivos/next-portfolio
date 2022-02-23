import React from 'react';
import { FooterContainer, FooterWrapper, FooterUl, FooterLink, SocialLinkGit } from './Footer.styled';

import { FiGithub } from 'react-icons/fi';

export const Footer: React.FC = ({}) => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterUl>
                        <li>
                            <FooterLink to="domov" spy={true} smooth={true} duration={1000}>
                                DOMOV
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="o-mne" spy={true} smooth={true} duration={1000}>
                                O MNE
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="kontakt" spy={true} smooth={true} duration={1000}>
                                KONTAKT
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="projekty" spy={true} smooth={true} duration={1000}>
                                PROJEKTY
                            </FooterLink>
                        </li>
                    </FooterUl>
                </FooterWrapper>
                <small>&copy; Designed by slivos, 2022</small>
                <FooterWrapper>
                    <FooterUl>
                        <li>
                            <div>+421 905 495 677</div>
                        </li>
                        <li>
                            <div>slivos.frontend@gmail.com</div>
                        </li>
                        <li>
                            <SocialLinkGit
                                href="http://github.com/slivos/next-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub />
                            </SocialLinkGit>
                        </li>
                    </FooterUl>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};
