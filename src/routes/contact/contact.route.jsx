import BannerImg from "../../assets/contact-us-banner.jpg";
import ContentImg from "../../assets/contact-us.jpg";
import IcbcLogo from "../../assets/ICBC_Logo.png";

import {
    ContentContainer,
    ContentHeader,
    ContentImage,
    ContentMessage,
    ContentLink,
} from "../page-content.styles";

import {
    ImageBannerContainer,
    BannerImage,
    BannerColumn,
    BannerMessage,
} from "../image-banner.styles";

import { ContactForm } from "../../components/contact-form/contact-form.component";

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
                    NewLook Autobody Ltd. performs top-notch quality automotive
                    repairs, repainting, and much more services for all types of
                    vehicles in Surrey and the nearby region. From luxury cars
                    to company fleets, we are also dedicated to providing
                    accommodations for your busy schedule. It is our goal to
                    attain 100% customer satisfaction for every single customer
                    with free estimates and a lifetime guarantee on all our
                    workmanship. We are also ICBC accredited collision repair &
                    valet shop and we will cover every step of the repair
                    process on your behalf. Get in touch with us today by simply
                    filling out the following form or calling us.
                </ContentMessage>
                <ContentImage src={ContentImg} alt="none" width={"40%"} />
                <ContactForm />
                <ContentHeader />
                <ContentImage src={IcbcLogo} alt="ICBC" width={"40%"} />

                <ContentHeader style={{ color: "green" }}>
                    We Give Free Quote!!
                </ContentHeader>
                <ContentLink href="tel:+16045035005">
                    CALL US @ 604-503-5005
                </ContentLink>
                <ContentHeader />
            </ContentContainer>
        </>
    );
};

export default ContactUs;
