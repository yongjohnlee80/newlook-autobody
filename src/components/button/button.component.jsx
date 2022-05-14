import { BaseButton, BlueButton, InvertedButton, TransButton } from "./button.styles";

const BUTTON_TYPES_CLASSES = {
    base: 'base',
    blue: "blue",
    inverted: "inverted",
    trans: "trans",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => (
    {
        [BUTTON_TYPES_CLASSES.base]: BaseButton,
        [BUTTON_TYPES_CLASSES.blue]: BlueButton,
        [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPES_CLASSES.trans]:TransButton,
    }[buttonType]
)

export const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
};
