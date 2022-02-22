import styled from 'styled-components';

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
`;

export const Item = styled.div`
    width: 20em;
    height: 10em;
    margin: 10px 10px;
    background: blueviolet;
    display: flex;
    justify-content: center;
    transition: box-shadow 0.2s ease-in;
    transition: background 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: 5px 5px 9px 5px rgba(0, 0, 0, 0.45);
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
            url('images/falcon-eshop.PNG') center center/cover no-repeat;
    }

    &:hover ${Text} {
        color: #66fcf1;
        font-weight: 800;
    }
`;

export const SendTo = styled.a`
    text-decoration: none;
`;
