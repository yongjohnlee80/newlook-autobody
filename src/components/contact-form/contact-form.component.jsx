import { useState, useContext } from "react";
import { DropdownMenuContext } from "../../contexts/dropdown-menu.context";

import { FormInput } from "../form-input/form-input.component";

import "./contact-form.styles.scss";
import { BaseButton } from "../button/button.styles";

const defaultFormFields = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

export const ContactForm = ({ hasCancelButton = false }) => {
    const { setIsDropdownMenuOpen } = useContext(DropdownMenuContext);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, phone, message } = formFields;

    const cancelDropdownMenuHandler = () => setIsDropdownMenuOpen(false);

    // const resetFormFields = () => {
    //     setFormFields(defaultFormFields);
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     resetFormFields();
    // };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="contact-container">
            <h2>Contact Form</h2>
            <span>
                Simply fill out the following e-form and we will contact you
                right away..
            </span>
            {/* <form onSubmit={handleSubmit}> */}
            <form
                action="https://formsubmit.co/newlookab1@gmail.com"
                method="POST"
            >
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_captcha" value="false" />
                <input
                    type="hidden"
                    name="_next"
                    value="https://www.newlook-autobody.com/submitted"
                />
                <FormInput
                    label="Your Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="name"
                    value={name}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Phone"
                    type="phone"
                    required
                    onChange={handleChange}
                    name="phone"
                    value={phone}
                />

                <FormInput
                    label="Message"
                    type="text"
                    required
                    onChange={handleChange}
                    name="message"
                    value={message}
                />
                <div className="button-container">
                    <BaseButton type="submit">Submit</BaseButton>
                    {hasCancelButton && (
                        <BaseButton onClick={cancelDropdownMenuHandler}>
                            Cancel
                        </BaseButton>
                    )}
                </div>
            </form>
        </div>
    );
};
