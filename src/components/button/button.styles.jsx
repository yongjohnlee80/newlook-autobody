import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    min-height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0px 35px 0px 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 1%;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const BlueButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const TransButton = styled(BaseButton)`
background-color: #ffffff00;
color: white;
border: 2px solid white;


&:hover {
    background-color: #4285f4;
    border: none;
    border: 2px solid white;
    color: white;
}
`;
