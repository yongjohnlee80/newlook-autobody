import styled from "styled-components";

export const FooterContainer = styled.div`
    min-height: 85px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1 auto;
    justify-content: space-between;
    background-color: #4d65f1;
`;

export const CopyrightContainer = styled.div`
    min-width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-begin;
    padding: 2% 2%;

    color: white;
    font-size: 20px;
    font-family: "Paytone One", sans-serif;
`;

export const CreditContainer = styled.a`
    min-width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 2% 2%;

    justify-content: flex-end;

    cursor: pointer;
    color: white;
    font-family: "Shadows Into Light", cursive;
    font-size: 20px;
    text-decoration: none;
`;
