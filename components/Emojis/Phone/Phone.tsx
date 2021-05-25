import React from 'react';
import { StyledPhone } from './Phone.styled';

export interface PhoneProps {
    label: string,
    role: string,
   };
   
   
   
export const Phone: React.FC<PhoneProps> = (
    { label, role, ...props }
   ) => (
    <StyledPhone
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </StyledPhone>
);
