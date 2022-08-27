import React from 'react';
import { MainSecContainer, SectionWelcome, StyledH1, StyledP, SocialLink, SocialWrapper } from './MainSection.styled';
import { Arrow } from '../Arrow/Arrow';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

export const MainSection: React.FC = () => {
    return (
        <MainSecContainer id="domov">
            <SectionWelcome>
                <StyledH1>Vitajte</StyledH1>
                <StyledP>
                    Volám sa Samuel a mojím zameraním je Front End Development.
                    <br />
                    Rád sa ponorím do svojej fantázie a jej výsledok prenesiem do kódu.
                    <br />
                    Baví ma tvoriť zaujímavé a moderné web stránky.
                </StyledP>
                <SocialWrapper>
                    <SocialLink
                        href="http://github.com/slivos/next-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />
                    </SocialLink>
                    <SocialLink
                        href="http://www.linkedin.com/in/samuel-slivos"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin />
                    </SocialLink>
                </SocialWrapper>
                <Arrow />
            </SectionWelcome>
        </MainSecContainer>
    );
};
