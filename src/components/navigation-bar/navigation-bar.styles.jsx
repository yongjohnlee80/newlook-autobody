import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #4D65F1;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    color: white;
    padding: 5px 15px;

`;

export const MainLogo = styled.img`
    width: 45%;
`

export const NavigationLinkContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavigationLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
`;
