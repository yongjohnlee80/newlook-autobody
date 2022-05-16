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
                    href="https://www.linkedin.com/in/yong-sung-john-lee-a4a9591bb/"
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
