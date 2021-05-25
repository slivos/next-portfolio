import React from 'react';
import { MainSecContainer,
         SectionWelcome, 
         StyledH1, 
         StyledP,
         SocialContainer,
         SocialWrapper,
         SocialLink,

} from './MainSection.styled';

import { Arrow } from '../Arrow/Arrow';

import { FiGithub } from 'react-icons/fi';


export interface MainSectionProps {
    href: string
   };
   
   
   
   export const MainSection: React.FC<MainSectionProps> = ({   
    ...props
   }) => {
       return (
           <MainSecContainer id="domov">
               <SectionWelcome {...props}>
                   <StyledH1>
                       Vitajte
                   </StyledH1>
                   <StyledP>
                   Volám sa Samuel a mojím zameraním je Front End Development.
                   <br/>Rád sa ponorím do svojej fantázie a jej výsledok prenesiem do kódu.
                   <br/>Baví ma tvoriť zaujímavé a moderné web stránky.
                   </StyledP>

                   <SocialContainer>
                       <SocialWrapper>
                           <SocialLink href="http://github.com/" target="_blank" rel="noopener noreferrer">
                               <FiGithub />
                           </SocialLink>
                       </SocialWrapper>
                   </SocialContainer>
                   <Arrow />
               </SectionWelcome>
           </MainSecContainer>
       );
   };
