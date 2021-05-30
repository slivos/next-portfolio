import styled from 'styled-components';

export const StyledArrow = styled.div`
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%,-50%);

@media (max-width: ${({ theme }) => theme.mobileS}) {
    top: 87%;
    }


    span {
        display: block;
        width: 30px;
        height: 30px;
        border-bottom: 5px solid #8BE9FD;
        border-right: 5px solid #f28500;
        transform: rotate(45deg);
        margin: -10px;
        animation: animate 2s infinite;

        :nth-child(2){
            animation-delay: -0.2s;
        }
    
        :nth-child(3){
            animation-delay: -0.4s;
        }

    @media (max-width: ${({ theme }) => theme.mobileS}) {
        width: 20px;
        height: 20px;
    }

    @media (max-width: ${({ theme }) => theme.mobile5XS}) {
        width: 15px;
        height: 15px;
    }
    }

    @keyframes animate {
        0% {
            opacity: 0;
            transform: rotate(45deg) translate(-20px,-20px);
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: rotate(45deg) translate(20px,20px);
        }
    }
`
