import styled from 'styled-components';

export const StyledBoy = styled.span`
    font-size: 1.8rem;
    position: absolute;
    top: 15px;
    left: 180px;

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1.5rem;
    top: 25px;
    left: 160px;
} 

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1.5rem;
    float: left;
    margin-left: -70px;
}

@media (max-width: ${({ theme }) => theme.mobile4XS}) {
    margin-left: -90px;
}

@media (max-width: ${({ theme }) => theme.mobile5XS}) {
    margin-left: -110px;
}
`
