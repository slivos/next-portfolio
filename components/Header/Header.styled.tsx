import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 60px;
    background-color: #66fcf1;
    color: #131d4d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px #5e5b5b;
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mobileL}) {
        display: none;
    }
`;

export const Li = styled.li`
    margin: 0 30px;
`;

export const StyledAnchor = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-size: 1.05rem;
    font-weight: 650;
    transition: color 0.3s linear;
    letter-spacing: 0.5px;

    &:hover {
        color: #6c757d;
    }
`;

export const Logo = styled.span`
    margin-right: 20px;
    font-size: 2.2rem;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.mobileL}) {
        font-size: 1.5rem;
    }
`;
