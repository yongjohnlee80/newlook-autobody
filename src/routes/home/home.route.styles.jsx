import styled from "styled-components";

export const HomeBannerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        width: 30%;
        opacity: 0.85;
        position: absolute;
        top: 355px;
        display: flex;
        margin-left: 50%;
    }

    &:hover {
        & img {
            transform: scale(1.1);
            transition: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`;

export const HomeBannerMessage = styled.div`
    width: 40%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin-top: 80px;
    margin-left: 50%;

    font-size: 30px;
    text-shadow: 2px 2px #000000;
    font-family: "Paytone One", sans-serif;
    color: #f0ffff;
    text-align: center;
`;

export const HomeBodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #F0F0F0
`;

export const HomeBodyTitle = styled.div`
    padding-top: 50px;
    font-size: 30px;
    font-family: "Paytone One", sans-serif;
    color: #4d3df1;
    text-align: center;
`;

export const HomeBodyMessage = styled(HomeBodyTitle)`
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    color: black;
    font-weight: lighter;
    padding-bottom: 50px;
    margin: 0% 20%;
`;
