import { createContext, useState } from "react";

export const DropdownMenuContext = createContext({
    isDropdownMenuOpen: false,
});

export const DropdownMenuProvider = ({children}) => {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

    const value = {
        isDropdownMenuOpen,
        setIsDropdownMenuOpen,
    };

    return (
        <DropdownMenuContext.Provider  value={value}>{children}</DropdownMenuContext.Provider>
    );
};