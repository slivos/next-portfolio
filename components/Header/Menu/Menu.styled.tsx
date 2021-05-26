import styled from 'styled-components';
import { MenuProps } from './Menu';

export const StyledMenu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)' };
  box-shadow: ${({ open }) => open ? '5px 5px 20px rgba(0, 0, 0, 0.8)' : ' ' };
  
  @media (min-width: 961px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.mobileXS}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobileXS}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
export const MenuContainer = styled.div<MenuProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({open}) => open ? 'rgba(0, 0, 0, 0.3)' : ' '};
  z-index: ${({open}) => open ? '99' : ''};
`
;