import styled from "styled-components";
import { TransButton } from "../components/button/button.styles";

export const ImageBannerContainer = styled.div`
    height: 35rem;

    width: 100%;
    max-width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex: 1 auto;
    flex-direction: row-reverse;
    justify-content: space-between;

    align-items: center;

    &:hover {
        & img {
            transform: scale(1.1);

            transition: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            max-width: 100%;
        }
    }
`;

export const BannerImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    z-index: -1;
`;

export const BannerColumn = styled.div`
    min-width: 40%;
    justify-content: center;
    overflow: hidden;
    position: absolute;
`;

export const BannerMessage = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 35px;
    color: #ffffff;
    text-shadow: 2px 2px #000000;

    font-family: "Open Sans", sans-serif;
    padding: 3%;
`;

export const BannerButton = styled(TransButton)`
    width: 50%;
    opacity: 0.85;
    display: flex;
    margin-left: 25%;
`;
