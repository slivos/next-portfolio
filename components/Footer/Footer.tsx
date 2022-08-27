import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterUl,
    FooterLink,
    FooterSocialLink,
    FooterSocialWrapper,
} from './Footer.styled';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

export const Footer: React.FC = () => {
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
                <small>
                    &copy; Created / designed by{' '}
                    <a href="https://github.com/slivos" target="_blank" rel="noopener noreferrer">
                        slivos
                    </a>
                    , 2022
                </small>
                <FooterWrapper>
                    <FooterUl>
                        <li>
                            <div>+421 905 495 677</div>
                        </li>
                        <li>
                            <div>slivos.frontend@gmail.com</div>
                        </li>
                        <FooterSocialWrapper>
                            <FooterSocialLink
                                href="http://github.com/slivos/next-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub />
                            </FooterSocialLink>
                            <FooterSocialLink
                                href="http://www.linkedin.com/in/samuel-slivos"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiLinkedin />
                            </FooterSocialLink>
                        </FooterSocialWrapper>
                    </FooterUl>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};
