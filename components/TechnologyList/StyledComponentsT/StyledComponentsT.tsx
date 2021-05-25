import React from 'react';
import { StyledCompT, SvgStyledComp } from './StyledComponentsT.styled';


export const StyledComponentsT: React.FC = () => {

    return(
        <>
        <SvgStyledComp />
        <StyledCompT>
          <strong>Styled-components</strong> - intermediate
        </StyledCompT>
        </>
    )
};
