import styled from 'styled-components';
import SvgStorybook from '../../Icons/SvgStorybook';

export const StyledStorybook = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 240px;
    left: 315px;
    

    strong {
        color: #FF4785;
    }

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1rem;
    left: 260px;
    top: 175px;
}

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1rem;
    float: right;
    margin-top: 70px;
    margin-left: -80px;
}

@media (max-width: ${({ theme }) => theme.mobileXXS}) {
    margin-left: -90px;
}

@media (max-width: ${({ theme }) => theme.mobile3XS}) {
    margin-left: -110px;
}
`
export const SvgStory = styled(SvgStorybook)`
    font-size: 2.2rem;
    display: block;
    margin: auto;
    

`
