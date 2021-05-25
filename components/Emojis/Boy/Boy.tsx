import React from 'react';
import { StyledBoy } from './Boy.styled';

export interface BoyProps {
    label: string,
    role: string,
   };
   
   
   
export const Boy: React.FC<BoyProps> = (
    { label, role, ...props }
   ) => (
    <StyledBoy
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </StyledBoy>
);
