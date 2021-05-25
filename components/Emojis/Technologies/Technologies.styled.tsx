import styled from 'styled-components';

export const StyledTechnologies = styled.span`
    font-size: 1.8rem;
    position: absolute;
    top: 15px;
    left: 150px;

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1.5rem;
    top: 25px;
    left: 125px;
} 

@media (max-width: ${({ theme }) => theme.mobileS}) {
    margin-left: -70px;
}

@media (max-width: ${({ theme }) => theme.mobile4XS}) {
    margin-left: -90px;
}

@media (max-width: ${({ theme }) => theme.mobile5XS}) {
    margin-left: -105px;
}
`
