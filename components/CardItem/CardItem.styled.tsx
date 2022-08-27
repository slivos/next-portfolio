import styled from 'styled-components';

export const CardContainer = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
    background-color: #323a42;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const CardWrapper = styled.div`
    width: 90%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledCard = styled.div`
    height: 25em;
    width: 35em;
    background-color: #004c99;
    border-radius: 10px;
    border-bottom: 6px solid #66fcf1;
    margin: 20px 30px;
    padding: 5px 10px;
    position: relative;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.8);

    @media (max-width: ${({ theme }) => theme.laptop}) {
        height: 20em;
        width: 30em;
    }

    @media (max-width: ${({ theme }) => theme.mobileS}) {
        height: 35em;
        width: 20em;
    }
`;

export const CardAboutMe = styled(StyledCard)`
    @media (max-width: ${({ theme }) => theme.mobileS}) {
        height: 30em;
        width: 20em;
    }

    @media (max-width: ${({ theme }) => theme.mobile5XS}) {
        height: 36em;
        width: 20em;
    }
`;

export const CardContact = styled(StyledCard)`
    @media (max-width: ${({ theme }) => theme.mobileS}) {
        height: 25em;
        width: 20em;
    }

    @media (max-width: ${({ theme }) => theme.mobile5XS}) {
        height: 22em;
        width: 20em;
    }
`;

export const H1Card = styled.h1`
    font-size: 1.7rem;
    font-weight: 700;
    color: #66fcf1;
    text-align: center;
    margin-bottom: 0;

    @media (max-width: ${({ theme }) => theme.mobileXS}) {
        font-size: 1.5rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: #c5c6c7;
    text-align: justify;
    height: 14em;
    margin: 0px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.laptop}) {
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.laptop}) {
        font-size: 1rem;
    }
`;

export const ParagraphExtended = styled(Paragraph)`
    font-size: 1.4rem;
    text-align: center;
    margin-top: 68.5px;
    height: 10em;

    @media (max-width: ${({ theme }) => theme.laptop}) {
        font-size: 1.2rem;
        margin-top: 40px;
    }

    @media (max-width: ${({ theme }) => theme.mobileS}) {
        margin-top: 60px;
        height: 10em;
    }

    @media (max-width: ${({ theme }) => theme.mobile5XS}) {
        font-size: 1rem;
        margin-top: 50px;
    }
`;

export const ActivityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mobileXS}) {
        margin-top: 20px;
    }

    @media (max-width: ${({ theme }) => theme.mobileXXS}) {
        margin-top: 0;
    }
`;

export const Sport = styled.div`
    display: inline-block;
    color: #06d6a0;
`;

export const Workout = styled(Sport)`
    color: #ffd60a;
    margin-left: 20px;
`;

export const Mtb = styled(Workout)`
    color: #76c893;
`;

export const Books = styled(Mtb)`
    color: #dda15e;
`;

export const Pools = styled(Books)`
    color: #4cc9f0;
`;

export const TechContainer = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #c5c6c7;
`;

export const TechWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
