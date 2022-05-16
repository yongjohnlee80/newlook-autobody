import ServiceImg from "../../assets/contact.jpg";
import WorkImg from "../../assets/work.jpg";

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

const Services = () => {
    return (
        <>
            <ImageBannerContainer>
                <BannerImage src={ServiceImg} alt="services" />
                <BannerColumn>
                    <BannerMessage>
                        AUTOBODY REPAIR <br />
                        PAINTING
                        <br />
                        FRAME REPAIR <br />
                        SCRATCH / FENDER REPAIR
                    </BannerMessage>
                </BannerColumn>
            </ImageBannerContainer>
            <ContentContainer>
                <ContentHeader>
                    Auto Body Repairs for Surrey, Delta and Surrounding Areas
                </ContentHeader>
                <ContentMessage>
                    At NewLook AutoBody Ltd. we endeavour to provide
                    all-inclusive, high quality, straightforward and flexible
                    auto body repairs for customers in Surrey, Delta, White
                    Rock, Langley, and beyond. When you go with NewLook AutoBody
                    Ltd. you’ll find a convenient one-stop-shop that offers
                    comprehensive automobile services, with great friendly
                    customer care and at affordable prices. Whether you need a
                    simple fix after a fender-bender, extensive repairs
                    following a large collision, a paint job, or help with
                    insurance claims, NewLook AutoBody Ltd. is at your disposal.
                    Our priority is always to get you back on the road as
                    quickly as possible with minimum difficulty and aggravation.
                </ContentMessage>
                <ContentImage src={WorkImg} alt="none" width={"40%"} />
                <ContentHeader style={{ color: "green" }}>
                    We Give Free Quote!!
                </ContentHeader>
                <BaseButton>Give Us A Call</BaseButton>
                <ContentHeader/>
            </ContentContainer>
        </>
    );
};

export default Services;
