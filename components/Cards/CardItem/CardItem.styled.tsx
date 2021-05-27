import styled from 'styled-components';

export const CardContainer = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    background-color: #323A42;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

@media (max-width: ${({ theme }) => theme.mobileS}) {
     
}
`

export const CardWrapper = styled.div`
    width: 90%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const StyledCard = styled.div`
    height: 42.42vh;
    width: 59.39vh;
    background-color: #004c99;
    border-radius: 10px;
    border-bottom: 6px solid #66FCF1;
    margin: 10px 30px;
    padding: 5px 10px;
    position: relative;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.8);
    

@media (max-width: ${({ theme }) => theme.laptop}) {
    height: 33.37vh;
    width: 50.05vh;
}

@media (max-width: ${({ theme }) => theme.mobileS}) {
    height: 56.73vh;
    width: 38.37vh; 
}
`

export const CardAboutMe = styled(StyledCard)`

@media (max-width: ${({ theme }) => theme.mobileS}) {
    height: 50.05vh;
    width: 38.37vh;
}
`

export const CardContact = styled(StyledCard)`

@media (max-width: ${({ theme }) => theme.mobileS}) {
    height: 43.38vh;
    width: 38.37vh;
}
`


export const H1Card = styled.h1`
    font-size: 1.7rem;
    font-weight: 700;
    color: #66FCF1;
    text-align: center;
`

export const Paragraph = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: #C5C6C7;
    text-align: justify;
    height: 14em;
    margin: 0px;
    position: relative;

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1rem;
}    
`

export const ParagraphExtended = styled(Paragraph)`
    font-size: 1.4rem;
    text-align: center;
    margin-top: 68.50px;
    height: 10em;

@media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 1.2rem;
    margin-top: 40px;
} 

@media (max-width: ${({ theme }) => theme.mobileS}) {
    font-size: 1.2rem;
    margin-top: 60px;
    height: 10em;
}
`

export const ActivityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Sport = styled.div`
    display: inline-block;
    color: #06d6a0;

`

export const Workout = styled(Sport)`
    color: #ffd60a;
    margin-left: 20px;
`

export const Mtb = styled(Workout)`
    color: #76c893;
`

export const Books = styled(Mtb)`
    color: #dda15e;
`

export const Pools = styled(Books)`
    color: #4cc9f0;
`

export const TechContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    text-align: center;
    color: #C5C6C7;
`

export const TechWrapper = styled.div`
    margin-top: 20px;

@media (max-width: ${({ theme }) => theme.laptop}) {
    margin-top: 0px;    
}
    
   div {
       display: inline-block;
   }
`

export const TechWrapper2 = styled(TechWrapper)`
   
`
