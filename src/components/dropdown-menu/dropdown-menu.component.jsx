
import { ContactForm } from "../contact-form/contact-form.component";
import "./dropdown-menu.styles.scss";

export const DropdownMenu = () => {
    return (
        <div className="cart-dropdown-container">
            <ContactForm hasCancelButton={true}/>
        </div>
    );
};
