import styled from 'styled-components';
import SvgStyledSystem from '../../Icons/SvgStyledSystem';

export const StyledSys = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 200px;
    left: 80px;

    strong {
        color: #000;
    }

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1rem;
    left: 70px;
    top: 145px;
}

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1rem;
    float: left;
    margin-top: 40px;
}

@media (max-width: ${({ theme }) => theme.mobile3XS}) {
    margin-left: 20px;
}
`
export const SvgStyledSys = styled(SvgStyledSystem)`
    font-size: 2.2rem;
    display: block;
    margin: auto;
`
