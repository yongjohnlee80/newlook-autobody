import ShopFrontImg from "../../assets/shopfront.png";
import HomeBodyImg from "../../assets/information.png";

import {
    HomeBannerContainer,
    HomeBannerMessage,
    HomeBodyContainer,
    HomeBodyMessage,
    HomeBodyTitle,
} from "./home.route.styles";

import { Button } from "../../components/button/button.component";

const Home = () => {
    return (
        <>
            <HomeBannerContainer>
                <img src={ShopFrontImg} alt="store front"></img>
                <HomeBannerMessage>
                    THE BEST IN TOWN <br />
                    AUTOBODY REPAIR EXPERTS <br />
                    We perform highest quality auto body repair and paint jobs.
                </HomeBannerMessage>

                <Button buttonType="trans">Learn More</Button>
            </HomeBannerContainer>
            <HomeBodyContainer>
                <HomeBodyTitle>Surrey’s Auto Body Professionals</HomeBodyTitle>
                <HomeBodyMessage>
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
                </HomeBodyMessage>
            </HomeBodyContainer>
        </>
    );
};

export default Home;
