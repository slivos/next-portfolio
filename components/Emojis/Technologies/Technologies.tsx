import React from 'react';
import { StyledTechnologies } from './Technologies.styled';

export interface TechnoProps {
    label: string,
    role: string,
   };
   
   
   
export const Technologies: React.FC<TechnoProps> = (
    { label, role, ...props }
   ) => (
    <StyledTechnologies
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </StyledTechnologies>
);
