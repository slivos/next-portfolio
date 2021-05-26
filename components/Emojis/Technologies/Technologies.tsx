import React from 'react';
import { StyledTechnologies } from './Technologies.styled';

export interface TechnoProps {
    label: string,
    symbol: string
   };
   
   
   
export function Technologies(props: TechnoProps): React.ReactElement { 
    return (
    <StyledTechnologies
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </StyledTechnologies>
    )
};
