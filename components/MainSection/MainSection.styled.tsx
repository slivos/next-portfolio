import styled from 'styled-components';

export const MainSecContainer = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient( 
    rgba(19,29,77,0.6),
    rgba(19,29,77,0.6)
    ),
    url("images/img1.jpg") center center/cover
    no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

@media (max-width: ${({ theme }) => theme.mobileM}) {
    background-attachment: unset; 
}
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

@media (max-width: ${({ theme }) => theme.mobileL}) and (orientation: landscape) {
    font-size: 6rem;
    margin-top: 0px;
}

@media (max-width: ${({ theme }) => theme.mobileM}) {
    font-size: 8rem;
}

@media (max-width: ${({ theme }) => theme.mobileM}) and (orientation: landscape) {
    font-size: 6rem;
    margin-top: 0px;
}

@media (max-width: ${({ theme }) => theme.mobileXS}) {
    font-size: 6rem;
}

@media (max-width: ${({ theme }) => theme.mobileXS}) and (orientation: landscape) {
    font-size: 5rem;
}

@media (max-width: ${({ theme }) => theme.mobileXXS}) {
    font-size: 5rem;
}
`

export const StyledP = styled.p`
    font-size: 1.5rem;
    padding: 0px 5px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    color: #C5C6C7;

@media (max-width: ${({ theme }) => theme.mobileL}) and (orientation: landscape) {
    font-size: 1.2rem;
    margin-top: -20px;
}

@media (max-width: ${({ theme }) => theme.mobileM}) {
    font-size: 1.3rem;
}

@media (max-width: ${({ theme }) => theme.mobileM}) and (orientation: landscape) {
    font-size: 1.2rem;
    margin-top: -20px;
}

@media (max-width: ${({ theme }) => theme.mobileXS}) {
    font-size: 1.15rem;
}

@media (max-width: ${({ theme }) => theme.mobileXS}) and (orientation: landscape) {
    font-size: 1rem;
    margin-top: -20px;
}

@media (max-width: ${({ theme }) => theme.mobileXXS}) {
    font-size: 1rem;
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

@media (max-width: ${({ theme }) => theme.mobileL}) and (orientation: landscape) {
    top: 10px;
}

@media (max-width: ${({ theme }) => theme.mobileM}) and (orientation: landscape) {
    top: 10px;
}
`
