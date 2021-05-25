import styled from 'styled-components';
import SvgStyledComponents from '../../Icons/SvgStyledComponents';

export const StyledCompT = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 150px;
    left: 190px;

    strong {
        color: #D3B83D;
    }

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1rem;
    left: 150px;
    top: 105px;
}

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1rem;
    float: right;
    margin-top: 20px;
    margin-left: -80px;
}

@media (max-width: ${({ theme }) => theme.mobileXXS}) {
    margin-left: -90px;
}

@media (max-width: ${({ theme }) => theme.mobile3XS}) {
    margin-left: -110px;
}
`
export const SvgStyledComp = styled(SvgStyledComponents)`
    font-size: 3rem;
    display: block;
    margin: auto;
`
