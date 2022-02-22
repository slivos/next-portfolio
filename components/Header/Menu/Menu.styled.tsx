import styled from 'styled-components';
import { MenuProps } from './Menu';

export const MenuContainer = styled.div<MenuProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    background-color: ${({ open }) => (open ? '#C5C6C7' : '')};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

    @media (min-width: ${({ theme }) => theme.mobileL}) {
        display: none;
    }
`;

export const MenuUl = styled.ul<MenuProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: none;
    z-index: 200;
    font-size: 1.5rem;
`;

export const MenuItem = styled.li<MenuProps>`
    cursor: pointer;
    font-weight: 700;
    color: #131d4d;
    padding-top: 30px;

    &:hover {
        border-bottom: 3px solid blueviolet;
    }
`;
