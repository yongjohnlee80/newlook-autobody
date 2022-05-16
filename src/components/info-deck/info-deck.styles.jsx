import styled from "styled-components";

export const InformationContainer = styled.div`
    min-height: 300px;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex: 1 auto;

    justify-content: space-between;

    padding-top: 5%;
    background-color: #303030;
`;

export const InfoDeckContainer = styled.div`
    min-width: 30%;
    flex-grow: 4;
    justify-content: center;
    margin: 0 7.5px 15px;
    overflow: hidden;
`;

export const InfoDeckSectionTitle = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    color: #FFFFFF;
    font-family: "Open Sans", sans-serif;
    padding: 3%;
`;

export const InfoDeckSectionItem = styled(InfoDeckSectionTitle)`
    font-size: 18px;
    font-weight: light;
    color: #909090;

    font-family: "Ubuntu", sans-serif;
    padding: 1%;
`;
