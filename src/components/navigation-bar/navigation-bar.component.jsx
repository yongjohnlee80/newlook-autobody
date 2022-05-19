import { Outlet } from "react-router-dom";

import {
    NavigationLink,
    NavigationContainer,
    LogoContainer,
    NavigationLinkContainer,
    TextLogo,
} from "./navigation-bar.styles";

import Header from "../header/header.component";

import Footer from "../footer/footer.component";
import InformationDeck from "../info-deck/info-deck.component";

const Navigation = () => {
    return (
        <>
            <Header />
            <NavigationContainer>
                <LogoContainer to="/">
                    <TextLogo to="/">NewLook Autobody</TextLogo>
                    {/* <MainLogo src={NewLookLogo}/> */}
                </LogoContainer>

                <NavigationLinkContainer>
                    {window.innerWidth>640 && <NavigationLink to="/">HOME</NavigationLink>}
                    <NavigationLink to="/service">SERVICES</NavigationLink>
                    <NavigationLink to="/contact">CONTACT</NavigationLink>
                </NavigationLinkContainer>
            </NavigationContainer>
            <Outlet/>
            <InformationDeck/>
            <Footer/>
        </>
    );
};

export default Navigation;
