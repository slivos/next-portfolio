
import styled from 'styled-components';

export const MainSecContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient( 
    rgba(19,29,77,0.6),
    rgba(19,29,77,0.6)
    ),
    url("/images/img1.jpg") center center/cover
    no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SectionWelcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`    

export const StyledH1 = styled.h1`
    font-size: 10rem;
    font-weight: bold;
    margin: 0;
    color: #66FCF1;
    margin-top: -100px;

@media (max-width: ${({ theme }) => theme.mobileM}) {
    font-size: 8.5rem;
}

@media (max-width: ${({ theme }) => theme.mobileXS}) {
    font-size: 7rem;
}
`

export const StyledP = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
    color: #C5C6C7;

@media (max-width: ${({ theme }) => theme.mobileM}) {
    font-size: 1.3rem;
}

@media (max-width: ${({ theme }) => theme.mobileXS}) {
    font-size: 1.15rem;
}
`

export const SocialContainer = styled.div`

`

export const SocialWrapper = styled.div`
    
`

export const SocialLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s linear;
    position: relative;
    top: 30px;

    &:hover {
        color: #66FCF1;
    }
`