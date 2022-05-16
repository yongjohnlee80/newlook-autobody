import BannerImg from "../../assets/contact-us-banner.jpg";
import ContentImg from "../../assets/contact-us.jpg";

import {
    ContentContainer,
    ContentHeader,
    ContentImage,
    ContentMessage,
} from "../page-content.styles";

import {
    ImageBannerContainer,
    BannerImage,
    BannerColumn,
    BannerMessage,
} from "../image-banner.styles";

import { BaseButton } from "../../components/button/button.styles";

const ContactUs = () => {
    return (
        <>
            <ImageBannerContainer>
                <BannerImage src={BannerImg} alt="services" />
                <BannerColumn>
                    <BannerMessage>Contact Us</BannerMessage>
                </BannerColumn>
            </ImageBannerContainer>
            <ContentContainer>
                <ContentHeader>
                    Leave Us the details and we will reach back right away.
                </ContentHeader>
                <ContentMessage>
                    NewLook Autobody Ltd. performs automotive repairs, repainting,
                    and much more for all types of vehicles in Surrey. From
                    luxury cars to company fleets, we always do our best to
                    accommodate your busy schedule. With free estimates and a
                    lifetime guarantee on all our workmanship, we strive to
                    attain 100% customer satisfaction with every visit to our
                    shop. We are ICBC approved and cover every step of the
                    repair process on your behalf. Get in touch with us today to
                    make use of our professional services!
                </ContentMessage>
                <ContentImage src={ContentImg} alt="none" width={"40%"} />
                <ContentHeader style={{ color: "green" }}>
                    We Give Free Quote!!
                </ContentHeader>
                <BaseButton>Book Now</BaseButton>
                <ContentHeader />
            </ContentContainer>
        </>
    );
};

export default ContactUs;
