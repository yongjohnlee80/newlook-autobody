import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 85px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #4d65f1;
`;

export const LogoContainer = styled.div`
    min-width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-begin;
`;

export const MainLogo = styled.img`
    width: 100%;
`;

export const NavigationLinkContainer = styled.div`
    min-width:50%;
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
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
`;

export const TextLogo = styled(NavigationLink)`
    padding: 10px 15px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Bree Serif', serif;
    font-size: 1.9rem;
`;
