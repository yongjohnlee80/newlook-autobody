import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1 auto;

    justify-content: space-between;
    justify-content: center;

    padding-top: 5%;
    background-color: #D0DAF0;
`;

export const ContentHeader = styled.div`
    min-width: 90%;
    flex-grow: 4;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    font-size: 2rem;
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
    padding: 1%;
`;

export const ContentImage = styled.img`
    min-width: 25%;
    max-width: 80%;
    height: auto;
    object-fit: cover;
    pointer-events: none;
    padding: 4%;
    opacity: .8;
`;

