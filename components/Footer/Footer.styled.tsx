import styled from 'styled-components';
import { Link } from 'react-scroll';
import { SocialLink } from '../MainSection/MainSection.styled';
import { SocialWrapper } from '../MainSection/MainSection.styled';

export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 1vh;
    background-color: #66fcf1;
    margin: 0;
    padding: 10px 0px 20px 0px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
    z-index: 0;

    small {
        position: absolute;
        bottom: 0;
        font-weight: 610;
        margin-top: 10px;
        color: #01385f;
    }

    small > a {
        color: #01385f;
        text-decoration: none;
    }

    @media (max-width: ${({ theme }) => theme.mobileXS}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const FooterWrapper = styled.div`
    @media (max-width: ${({ theme }) => theme.mobileXS}) {
        margin: 0px 0px 20px 0px;
    }
`;

export const FooterUl = styled.ul`
    margin: 0;
    list-style: none;
    text-align: center;

    div {
        font-size: 1.05rem;
        font-weight: 650;
    }

    @media (max-width: ${({ theme }) => theme.mobileXS}) {
        padding: 0;
    }
`;

export const FooterSocialWrapper = styled(SocialWrapper)`
    min-width: 30%;
    width: 65%;
    justify-content: space-evenly;
    margin: 0 auto;
`;

export const FooterLink = styled(Link)`
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

export const FooterSocialLink = styled(SocialLink)`
    color: #01385f;

    &:hover {
        color: #6c757d;
    }
`;
