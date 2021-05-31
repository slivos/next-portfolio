import React from 'react';
import Slide from 'react-reveal/Slide'

import { SvgNext } from '../TechnologyList/NextT/NextT.styled';
import { SvgReact } from '../TechnologyList/ReactT/ReactT.styled';
import { SvgStory } from '../TechnologyList/StorybookT/StorybookT.styled';
import { SvgStyledComp } from '../TechnologyList/StyledComponentsT/StyledComponentsT.styled';
import { SvgStyledSys } from '../TechnologyList/StyledSystemT/StyledSystemT.styled';
import { SvgType } from '../TechnologyList/TypescriptT/TypescriptT.styled';
// import { NextT } from '../../TechnologyList/NextT/NextT';
// import { ReactT } from '../../TechnologyList/ReactT/ReactT';
// import { StorybookT } from '../../TechnologyList/StorybookT/StorybookT';
// import { StyledComponentsT } from '../../TechnologyList/StyledComponentsT/StyledComponentsT';
// import { StyledSystemT } from '../../TechnologyList/StyledSystemT/StyledSystemT';
// import { TypescriptT } from '../../TechnologyList/TypescriptT/TypescriptT';
import { CardContainer, 
         CardWrapper,
         StyledCard,
         H1Card,
         Paragraph,
         Sport,
         Workout,
         Mtb,
         Books,
         Pools,
         ActivityWrapper,
         TechWrapper,
         TechContainer,
         ParagraphExtended,
         TechWrapper2,
         CardAboutMe,
         CardContact
    


} from './CardItem.styled';




   
 export const CardItem: React.FC = ({   
   }) => {

       return (
           <>   
                <CardContainer>
                    <CardWrapper>
                        <Slide bottom>
                        <CardAboutMe id="o-mne">
                            <H1Card>
                            &#128102; O mne   
                            </H1Card>
                            <Paragraph>
                            Som Junior Front End Developer,
                            ktorý má v sebe veľkú túžbu tvoriť.
                            Vytvárať diela, o ktorých vie,
                            že druhým spravia radosť.
                            Snažím sa deň po dni na sebe pracovať
                            a prísť na každý problém.
                            Ak ma zrovna nenájdete kódiť, 
                            tak ma určite nájdete jazdiť v prírode 
                            na bicykli alebo cvičiť.
                            <br/>
                            <br/>
                            <ActivityWrapper>
                                <Sport>
                                    #&nbsp; šport
                                </Sport>
                                <Workout>
                                    #&nbsp; workout
                                </Workout>
                                <Mtb>
                                    #&nbsp; mtb
                                </Mtb>
                                <Books>
                                    #&nbsp; knihy
                                </Books>
                                <Pools>
                                    #&nbsp; bazény
                                </Pools>
                            </ActivityWrapper>
                            </Paragraph>
                        </CardAboutMe>
                        </Slide>
                        <Slide bottom>
                        <CardContact id="kontakt">
                            <H1Card>
                            &#128241; Kontakt   
                            </H1Card>
                            <ParagraphExtended>
                                +421 905 495 677
                                <br/>
                                <br/>
                                slivos.frontend@gmail.com
                            </ParagraphExtended>
                        </CardContact>
                        </Slide>
                        <Slide bottom>
                        <StyledCard id="technologie">
                            <H1Card>
                            &#128295; Technológie  
                            </H1Card>
                        <TechContainer>
                            <TechWrapper>
                                <SvgNext />
                                <div>Next-JS - junior</div>
                                <SvgReact />
                                <div>React-JS - junior</div>
                                <SvgStory />
                                <div>Storybook - junior</div>
                            </TechWrapper>
                            <TechWrapper2>    
                                <SvgType/>
                                <div>Typescript - junior</div>
                                <SvgStyledSys />
                                <div>Styled-system - junior</div>
                                <SvgStyledComp />
                                <div>Styled-components - intermediate</div>
                            </TechWrapper2>
                        </TechContainer>
                        </StyledCard>
                        </Slide>
                    </CardWrapper>
                </CardContainer>
           </>
       );
   };
