import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #4d65f1;
`;

export const CopyrightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-begin;
    padding: 1px 20px;

    color: white;
    font-size: 18px;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
`;

export const CreditContainer = styled(CopyrightContainer)`

    justify-content: flex-end;

    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
`;
