import React from 'react';
import { SvgReact } from '../TechnologyList/React/React.styled';
import { SvgStyledComp } from '../TechnologyList/StyledComponents/StyledComponents.styled';
import { SvgStyledSys } from '../TechnologyList/StyledSystem/StyledSystem.styled';
import { SvgType } from '../TechnologyList/Typescript/Typescript.styled';

import {
    CardContainer,
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
    CardAboutMe,
    CardContact,
    ItemWrapper,
} from './CardItem.styled';

export const CardItem: React.FC = () => {
    return (
        <>
            <CardContainer>
                <CardWrapper>
                    <CardAboutMe id="o-mne">
                        <H1Card>O mne</H1Card>
                        <Paragraph>
                            Som Junior Front End Developer, ktorý má v sebe veľkú túžbu tvoriť. Vytvárať diela, o
                            ktorých vie, že druhým spravia radosť. Snažím sa deň po dni na sebe pracovať a prísť na
                            každý problém. Ak ma zrovna nenájdete kódiť, tak ma určite nájdete jazdiť v prírode na
                            bicykli alebo cvičiť.
                            <br />
                            <br />
                            <ActivityWrapper>
                                <Sport>#&nbsp; šport</Sport>
                                <Workout>#&nbsp; workout</Workout>
                                <Mtb>#&nbsp; mtb</Mtb>
                                <Books>#&nbsp; knihy</Books>
                                <Pools>#&nbsp; bazény</Pools>
                            </ActivityWrapper>
                        </Paragraph>
                    </CardAboutMe>
                    <CardContact id="kontakt">
                        <H1Card>Kontakt</H1Card>
                        <ParagraphExtended>
                            +421 905 495 677
                            <br />
                            <br />
                            slivos.frontend@gmail.com
                        </ParagraphExtended>
                    </CardContact>
                    <StyledCard id="technologie">
                        <H1Card>Technológie</H1Card>
                        <TechContainer>
                            <TechWrapper>
                                <ItemWrapper>
                                    <SvgReact />
                                    <div>React.js</div>
                                </ItemWrapper>
                                <ItemWrapper>
                                    <SvgType />
                                    <div>Typescript</div>
                                </ItemWrapper>
                            </TechWrapper>
                            <TechWrapper>
                                <ItemWrapper>
                                    <SvgStyledSys />
                                    <div>Styled-system</div>
                                </ItemWrapper>
                                <ItemWrapper>
                                    <SvgStyledComp />
                                    <div>Styled-components</div>
                                </ItemWrapper>
                            </TechWrapper>
                        </TechContainer>
                    </StyledCard>
                </CardWrapper>
            </CardContainer>
        </>
    );
};
