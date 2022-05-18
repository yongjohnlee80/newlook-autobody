import { useNavigate } from "react-router-dom";

import ShopFrontImg from "../../assets/shopfront.png";
import RanchImg from "../../assets/contact.jpg";
import LinkImg from "../../assets/links.jpg";

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
                    If you’ve been in a fender bender and need a quick and
                    efficient fix, bring your vehicle to NewLook Autobody Ltd.,
                    Surrey’s friendly and reliable auto body repair experts. We
                    have the know-how and experience to get your repairs done
                    promptly, professionally, and at affordable prices. When you
                    bring your vehicle to our shop, we make it our priority to
                    get you back on the road as quickly as possible and with
                    minimum stress. Our courteous and efficient team specializes
                    in handling ICBC accident claims for residents of Surrey and
                    the surrounding areas. When you entrust your vehicle to us
                    you are guaranteed to receive courteous hassle-free service,
                    top-notch workmanship, and reasonable pricing. Additionally,
                    all of our work comes with a lifetime workmanship guarantee
                    so that you can be sure that you’ll be covered in the long
                    run.
                </ContentMessage>
                <ContentImage src={RanchImg} alt="Ranch" width={"40%"} />
                <ContentImage src={LinkImg} alt="Ranch" width={"20%"} />
                <ContentHeader style={{ color: "green" }}>
                    Come See Us Today!!
                </ContentHeader>
                <ContentLink href="https://maps.google.com/?q=NewLookAutobodyLtd.+7788+132st+surrey+bc+v3w0h5">
                    {/* <ContentLink href="https://maps.google.com/?q=NewLookAutobodyLtd.+7788+132st+surrey+bc+v3w0h5"> */}
                        FIND US ON THE MAP (#5 - 7788 132 St., Surrey)
                    {/* </ContentLink> */}
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
