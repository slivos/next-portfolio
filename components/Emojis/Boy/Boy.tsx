import React from 'react';
import { StyledBoy } from './Boy.styled';

export interface BoyProps {
    label: string,
    symbol: string
   };
   
   
   
export function Boy(props: BoyProps): React.ReactElement { 
    return (
    <StyledBoy
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </StyledBoy>
    )
};
