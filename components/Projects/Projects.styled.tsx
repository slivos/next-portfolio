import styled from 'styled-components';

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #323a42;

    &:after {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: -600px;
        top: 0;
        width: 1200px;
        border-bottom: 2px solid #66fcf1;
    }

    @media (max-width: ${({ theme }) => theme.laptop}) {
        &:after {
            left: 50%;
            margin-left: -400px;
            width: 800px;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobileL}) {
        &:after {
            left: 50%;
            margin-left: -300px;
            width: 600px;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobileM}) {
        &:after {
            left: 50%;
            margin-left: -200px;
            width: 400px;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile4XS}) {
        &:after {
            left: 50%;
            margin-left: -150px;
            width: 300px;
        }
    }
`;

export const H1 = styled.h1`
    position: relative;
    padding: 20px 0 0 0;
    margin: 0;
    text-align: center;
    color: #c5c6c7;

    &:after {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: -37.5px;
        bottom: 0;
        width: 75px;
        border-bottom: 4px solid #66fcf1;
    }
`;

export const ProjectsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 30px 0;
`;

export const ProjectsWrapper = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
