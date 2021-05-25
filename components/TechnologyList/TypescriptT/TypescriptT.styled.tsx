import styled from 'styled-components';
import SvgTypescript from '../../Icons/SvgTypescript';

export const StyledTypescript = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 90px;
    left: 80px;

    strong {
        color: #3d92ca;
    }

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1rem;
    left: 70px;
    top: 60px;
}

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1rem;
    float: left;
    margin-top: 10px;
}

@media (max-width: ${({ theme }) => theme.mobile3XS}) {
    margin-left: 20px;
}
`

export const SvgType = styled(SvgTypescript)`
    font-size: 2.2rem;
    display: block;
    margin: auto;
`
