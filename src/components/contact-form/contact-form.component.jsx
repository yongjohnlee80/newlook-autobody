import { useState } from "react";

import { FormInput } from "../form-input/form-input.component";


import "./contact-form.styles.scss";
import { BaseButton } from "../button/button.styles";

const defaultFormFields = {
    displayName: "",
    email: "",
    phone: "",
    message: "",
};

export const ContactForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, phone, message } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        resetFormFields();

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="contact-container">
            <h2>Contact Form</h2>
            <span>
                If you prefer to communicate online, simply fill out the e-form
                below:
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Your Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
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
                <BaseButton>Submit</BaseButton>
            </form>
        </div>
    );
};
