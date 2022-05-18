import { useNavigate } from "react-router-dom";

import BannerImg from "../../assets/formsubmit.jpg";

import {
    ImageBannerContainer,
    BannerImage,
    BannerColumn,
    BannerMessage,
    BannerButton,
} from "../image-banner.styles";

import {
    ContentContainer,
    ContentHeader,
    ContentLink,
    ContentMessage,
} from "../page-content.styles";

const FormSubmitSuccess = () => {
    const navigate = useNavigate();

    const goToHomeHandler = () => {
        navigate("/");
    };

    return (
        <>
            <ImageBannerContainer>
                <BannerImage src={BannerImg} alt="Submit Successfully" />
                <BannerColumn>
                    <BannerMessage>
                        Your form has been submitted successfully <br />
                        and we will contact you very very soon.
                        <br />
                    </BannerMessage>
                    <BannerButton onClick={goToHomeHandler}>
                        Back to Home
                    </BannerButton>
                </BannerColumn>
            </ImageBannerContainer>
            <ContentContainer>
                <ContentHeader>Newlook Autobody is here to assist you.</ContentHeader>
                <ContentMessage>
                    It's time to put your worries behind and let us take care of you.
                </ContentMessage>
                <ContentHeader style={{ color: "green" }}>
                    Come See Us Today!!
                </ContentHeader>
                <ContentLink href="https://maps.google.com/?q=NewLookAutobodyLtd.+7788+132st+surrey+bc+v3w0h5">
                    {/* <ContentLink href="https://maps.google.com/?q=NewLookAutobodyLtd.+7788+132st+surrey+bc+v3w0h5"> */}
                        FIND US ON THE MAP (#5 - 7788 132 St., Surrey)
                    {/* </ContentLink> */}
                </ContentLink>
                <ContentHeader></ContentHeader>
            </ContentContainer>
        </>
    );
};

export default FormSubmitSuccess;
