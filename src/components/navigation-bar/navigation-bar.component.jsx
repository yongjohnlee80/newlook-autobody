import { Outlet } from "react-router-dom";

import { useState, useEffect } from "react";

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
    const [windowDimension, setWindowDimention] = useState(null);

    useEffect(()=> {
        setWindowDimention(window.innerWidth);
    }, []);

    useEffect(()=>{
        function handleResize() {
            setWindowDimention(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isNotMobile = windowDimension > 640;

    return (
        <>
            <Header />
            <NavigationContainer>
                <LogoContainer to="/">
                    <TextLogo to="/">NewLook Autobody</TextLogo>
                    {/* <MainLogo src={NewLookLogo}/> */}
                </LogoContainer>

                <NavigationLinkContainer>
                    {isNotMobile && (
                        <NavigationLink to="/">HOME</NavigationLink>
                    )}
                    <NavigationLink to="/service">SERVICES</NavigationLink>
                    <NavigationLink to="/contact">CONTACT</NavigationLink>
                </NavigationLinkContainer>
            </NavigationContainer>
            <Outlet />
            <InformationDeck />
            <Footer />
        </>
    );
};

export default Navigation;
