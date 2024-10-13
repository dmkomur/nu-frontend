import { useState } from "react";
import {
    NavWrapper,
    StyledNavLink,
    MobileMenu,
    MobileMenuButton,
    Overlay,
} from "./Navigation.styled";
import IconHamburgerMenu from "../common/svg/BurgerSvg";
import IconClose from "../common/svg/CloseSvg";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <NavWrapper>
                <StyledNavLink to="/grammar">ГРАМАТИКА</StyledNavLink>
                <StyledNavLink to="/expressions">ВИРАЗИ</StyledNavLink>
            </NavWrapper>

            <MobileMenuButton open={isOpen} onClick={toggleMenu}>
                {isOpen ? <IconClose /> : <IconHamburgerMenu />}
            </MobileMenuButton>

            <MobileMenu open={isOpen}>
                <StyledNavLink to="/grammar" onClick={closeMenu}>
                    ГРАМАТИКА
                </StyledNavLink>
                <StyledNavLink to="/expressions" onClick={closeMenu}>
                    ВИРАЗИ
                </StyledNavLink>
            </MobileMenu>

            <Overlay open={isOpen} onClick={closeMenu} />
        </>
    );
};

export default Navigation;
