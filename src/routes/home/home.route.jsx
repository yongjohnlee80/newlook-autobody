import { useNavigate } from "react-router-dom";

import ShopFrontImg from "../../assets/shopfront.png";
// import RanchImg from "../../assets/contact.jpg";
// import LinkImg from "../../assets/links.jpg";
import IcbcLogo from "../../assets/ICBC_Logo.png";

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
    ContentImage,
    ContentLink,
    ContentMessage,
} from "../page-content.styles";
import { BlueButton } from "../../components/button/button.styles";

const Home = () => {
    const navigate = useNavigate();

    const goToServicesHandler = () => {
        navigate("/service");
    };

    const goToContactUsHandler = () => {
        navigate("/contact");
    };

    return (
        <>
            <ImageBannerContainer>
                <BannerImage src={ShopFrontImg} alt="store front" />
                <BannerColumn>
                    <BannerMessage>
                        THE BEST IN TOWN <br />
                        AUTOBODY REPAIR EXPERTS
                        <br />
                        We perform highest quality auto body <br />
                        repair and paint jobs.
                    </BannerMessage>
                    <BannerButton onClick={goToServicesHandler}>
                        Learn More
                    </BannerButton>
                </BannerColumn>
            </ImageBannerContainer>
            <ContentContainer>
                <ContentHeader>Surrey’s Auto Body Professionals</ContentHeader>
                <ContentMessage>
                    If you’ve been in an accident and require a swift and
                    efficient repair, bring your vehicle to NewLook Autobody
                    Ltd., Surrey’s friendly and reliable auto body repair
                    experts. We have the know-how and expertise to get your
                    repairs done swiftly and professionally at an affordable
                    price. It is our number one priority to get you back on the
                    road as quickly as possible with minimum stress. Our
                    friendly team of experts specializes in handling ICBC
                    accident claims for residents of Surrey and nearby regions.
                    You can entrust your vehicle to us and we guarantee to
                    provide courteous hassle-free service, top-notch
                    workmanship, and affordable pricing. In addition, all of our
                    work comes with a lifetime workmanship guarantee so that you
                    can be assured. We also provide pick-up and drop-off
                    services to accommodate your busy schedule.
                </ContentMessage>
                {/* <ContentImage src={LinkImg} alt="Ranch" width={"20%"} /> */}
                <ContentImage src={IcbcLogo} alt="ICBC" width={"40%"} />

                <ContentHeader style={{ color: "green" }}>
                    Come See Us Today!!
                </ContentHeader>
                <ContentLink href="https://maps.google.com/?q=NewLookAutobodyLtd.+7788+132st+surrey+bc+v3w0h5">
                    FIND US ON THE MAP (#5 - 7788 132 St., Surrey)
                </ContentLink>
                <ContentHeader style={{ color: "green" }}>OR</ContentHeader>

                <BlueButton onClick={goToContactUsHandler}>
                    Book Appointment Today!
                </BlueButton>
                <ContentHeader></ContentHeader>
            </ContentContainer>
        </>
    );
};

export default Home;
