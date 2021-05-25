import React from 'react';
import { StyledStorybook, SvgStory } from './StorybookT.styled';




export const StorybookT: React.FC = () => {

    return(
        <>
        <SvgStory />
        <StyledStorybook>
          <strong>Storybook</strong> - junior
        </StyledStorybook>
        </>
    )
};
