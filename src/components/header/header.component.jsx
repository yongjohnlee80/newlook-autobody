import { useContext } from "react";
import { DropdownMenuContext } from "../../contexts/dropdown-menu.context";

import { InvertedButton } from "../button/button.styles";
import { DropdownMenu } from "../dropdown-menu/dropdown-menu.component";
// import { Button } from "../button/button.component";
import {
    HeaderContainer,
    AnnouncementContainer,
    HeaderLink,
} from "./header.styles";

const Header = () => {
    const { isDropdownMenuOpen, setIsDropdownMenuOpen } =
        useContext(DropdownMenuContext);

    const openDropdownMenuHandler = () =>
        setIsDropdownMenuOpen(!isDropdownMenuOpen);
    return (
        <>
            <HeaderContainer>
                <AnnouncementContainer>
                    <HeaderLink href="https://maps.google.com/?q=NewLookAutobodyLtd.+7788+132st+surrey+bc+v3w0h5">
                        {/* <HeaderLink href="https://maps.google.com/?q=NewLookAutobodyLtd.+7788+132st+surrey+bc+v3w0h5"> */}
                            #5 - 7788 132 St., Surrey, BC V3W 0H5
                        {/* </HeaderLink> */}
                    </HeaderLink>
                    <HeaderLink href="tel:+1604503-5005">
                        Tel: (604) 503-5005
                    </HeaderLink>
                </AnnouncementContainer>
                <InvertedButton onClick={openDropdownMenuHandler} type="button">
                    Schedule Your Appointment Today
                </InvertedButton>
                {isDropdownMenuOpen && <DropdownMenu />}
            </HeaderContainer>
        </>
    );
};

export default Header;
