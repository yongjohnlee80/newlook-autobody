import {
    FooterContainer,
    CopyrightContainer,
    CreditContainer,
} from "./footer.styles";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <CopyrightContainer>
                    Copyright NewLook AutoBody Ltd. 2022
                </CopyrightContainer>
                <CreditContainer
                    href="https://www.yongsunglee.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Created by Y.S. Lee
                </CreditContainer>
            </FooterContainer>
        </>
    );
};

export default Footer;
