import styled from "styled-components";

export const HeaderContainer = styled.div`
    min-height: 75px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1 auto;
    justify-content: space-between;
    background-color: #303030;
`;

export const AnnouncementContainer = styled.div`
    min-width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    justify-content: center;
    color: white;
    font-size: 20px;
    font-family: "Ubuntu", sans-serif;
    font-weihgt: light;
`;

export const HeaderLink = styled.a`
    padding: 2px;
    text-decoration: none;
    color: white;

    &:hover {
        font-weight: bold;
    }
`;
