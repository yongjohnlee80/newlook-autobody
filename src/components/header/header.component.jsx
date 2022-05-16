import { BlueButton } from "../button/button.styles";
// import { Button } from "../button/button.component";
import { HeaderContainer, AnnouncementContainer } from "./header.styles";

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <AnnouncementContainer>
                    #5 - 7788 132 St., Surrey, BC V3W 0H5<br />
                    Tel: (604) 503-5005
                </AnnouncementContainer>
                <BlueButton type="button">
                    Schedule Your Appointment Today
                </BlueButton>
            </HeaderContainer>
        </>
    );
};

export default Header;
