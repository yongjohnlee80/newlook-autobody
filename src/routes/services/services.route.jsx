import ServiceImg from "../../assets/contact.jpg";
import WorkImg from "../../assets/work.jpg";

import CertImg1 from "../../assets/documents/1.png";
import CertImg2 from "../../assets/documents/2.png";
import CertImg3 from "../../assets/documents/3.png";
import CertImg4 from "../../assets/documents/4.png";
import CertImg5 from "../../assets/documents/5.png";

import {
    CertCardsBox,
    Certificate,
    ContentContainer,
    ContentHeader,
    ContentImage,
    ContentLink,
    ContentMessage,
} from "../page-content.styles";

import {
    ImageBannerContainer,
    BannerImage,
    BannerColumn,
    BannerMessage,
} from "../image-banner.styles";

const certificates = [
    {
        id: 1,
        src: CertImg1,
    },
    {
        id: 2,
        src: CertImg2,
    },
    {
        id: 3,
        src: CertImg3,
    },
    {
        id: 4,
        src: CertImg4,
    },
    {
        id: 5,
        src: CertImg5,
    },
];

const CertCard = (props) => {
    const { id, src } = props;

    return (
        <div>
            <Certificate src={src} alt={id} />
        </div>
    );
};

const CertCards = (props) => {
    const certList = props.list;
    return (
        <CertCardsBox>
            {certList.map((cert) => (
                <CertCard key={cert.id} src={cert.src} />
            ))}
        </CertCardsBox>
    );
};

const Services = () => {
    return (
        <>
            <ImageBannerContainer>
                <BannerImage src={ServiceImg} alt="services" />
                <BannerColumn>
                    <BannerMessage>
                        AUTOBODY REPAIR <br />
                        BODY PAINTING
                        <br />
                        COLLISION REPAIR
                        <br />
                        INSURANCE CLAIMS <br />
                        PICK UP/DROP OFF
                    </BannerMessage>
                </BannerColumn>
            </ImageBannerContainer>
            <ContentContainer>
                <ContentHeader>
                    Autobody Repairs for Surrey, Delta and Surrounding Areas
                </ContentHeader>
                {/* <ContentImage src={WorkImg} alt="none" width={"25%"} /> */}

                <ContentMessage>
                    At NewLook AutoBody Ltd. we strive to deliver all-inclusive,
                    the best quality, honest, and accommodating auto body
                    repairs and services for customers in Surrey, Delta, White
                    Rock, Langley, and beyond. When you choose NewLook AutoBody
                    Ltd. you’ll find a convenient one-stop shop that offers
                    comprehensive automobile services by friendly experts at
                    affordable prices. Whether you need a simple fix after a
                    fender-bender, extensive repairs following a large
                    collision, a paint job, or help with insurance claims,
                    NewLook AutoBody Ltd. is here to assist you through the
                    challenging times. Our priority is always to get you back on
                    the road as quickly as possible without hassle.
                </ContentMessage>
                <ContentHeader />

                <CertCards list={certificates} />
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

export default Services;
