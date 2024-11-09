import { StyledScrollUpButton } from "./ScrollUpButton.styled";
import { useState, useEffect } from "react";
import UpArrowSvg from "../common/svg/UpArrowSvg";

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 2000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const heroElement = document.getElementById("logo");
        if (heroElement) {
            heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <StyledScrollUpButton onClick={scrollToTop} $visible={isVisible}>
            <UpArrowSvg style={{ stroke: "black" }} />
        </StyledScrollUpButton>
    );
};

export default ScrollUpButton;
