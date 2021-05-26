import React from 'react';
import { StyledPhone } from './Phone.styled';

export interface PhoneProps {
    label: string,
    symbol: string
   };
   
   
   
export function Phone(props: PhoneProps): React.ReactElement { 
    return (
    <StyledPhone
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </StyledPhone>
    )
};
