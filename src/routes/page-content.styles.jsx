import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1 auto;

    justify-content: space-between;
    justify-content: center;

    padding-top: 5%;
    background-color: #d0daf0;
`;

export const ContentHeader = styled.div`
    min-width: 90%;
    flex-grow: 4;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    font-size: 1.8rem;
    color: #4d3df1;
    font-family: "Open Sans", sans-serif;
    padding: 3%;
`;

export const ContentMessage = styled(ContentHeader)`
    min-width: 30%;
    max-width: 75%;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    font-weight: light;
    color: black;

    font-family: "Ubuntu", sans-serif;
    padding: 1rem;
`;

export const ContentImage = styled.img`
    min-width: 40%;
    max-width: 80%;
    height: auto;
    object-fit: cover;
    pointer-events: none;
    padding: 4%;
    opacity: 0.8;
`;

export const ContentLink = styled.a`
    padding: 2px;
    text-decoration: none;
    font-size: 1.8rem;
    color: #d0daf0;
    background-color: #d71414;

    &:hover {
        color: #d71414;
        background-color: #d0daf0;
    }
`;

export const Certificate = styled.img`
    padding: 1rem;
    height: 18rem;
    width: 18rem;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 1px 1px 4px grey;
    margin: 10px;
    display: block;
    text-align: center;
`;

export const CertCardsBox = styled.div`
    margin: 0;
    padding: 0;
    height: auto;
    width: 75%;
    scrollbar-width: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 auto;
    flex-grow: 3;
`;
