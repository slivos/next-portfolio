import styled from 'styled-components';
import SvgReactjs from '../../Icons/SvgReactjs';

export const StyledReactT = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    left: 80px;
    top: 5px;

    strong {
        color: #00D8FF;
    }

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1rem;
    left: 70px;
    top: -10px;
}

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1rem;
    float: left;
}

@media (max-width: ${({ theme }) => theme.mobile3XS}) {
    margin-left: 20px;
}
`
export const SvgReact = styled(SvgReactjs)`
    font-size: 2.2rem;
    display: block;
    margin: auto;

`
