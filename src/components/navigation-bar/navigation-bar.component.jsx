import { Outlet } from "react-router-dom";

import {
    NavigationLink,
    NavigationContainer,
    LogoContainer,
    MainLogo,
    NavigationLinkContainer,
} from "./navigation-bar.styles";

import Header from "../header/header.component";

import NewLookLogo from '../../assets/cover.png';
import Footer from "../footer/footer.component";
import InformationDeck from "../info-deck/info-deck.component";

const Navigation = () => {
    return (
        <>
            <Header />
            <NavigationContainer>
                <LogoContainer to="/">
                    <MainLogo src={NewLookLogo}/>
                </LogoContainer>

                <NavigationLinkContainer>
                    <NavigationLink to="/">HOME</NavigationLink>
                    <NavigationLink to="/service">SERVICES</NavigationLink>
                    <NavigationLink to="/contact">CONTACT US</NavigationLink>
                </NavigationLinkContainer>
            </NavigationContainer>
            <Outlet/>
            <InformationDeck/>
            <Footer/>
        </>
    );
};

export default Navigation;
