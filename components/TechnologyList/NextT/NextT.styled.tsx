import styled from 'styled-components';
import SvgNextjs from '../../Icons/SvgNextjs';

export const StyledNextT = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 45px;
    left: 335px;

    strong {
        color: #C9D0D3;
    }

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1rem;
    left: 280px;
    top: 20px;
}

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1rem;
    float: right;
    margin-top: 10px;
    margin-left: -80px;
}

@media (max-width: ${({ theme }) => theme.mobileXXS}) {
    margin-left: -90px;
}

@media (max-width: ${({ theme }) => theme.mobile3XS}) {
    margin-left: -110px;
}
`

export const SvgNext = styled(SvgNextjs)`
    font-size: 2.2rem;
    fill: #C9D0D3;
    display: block;
    margin: auto;
`
