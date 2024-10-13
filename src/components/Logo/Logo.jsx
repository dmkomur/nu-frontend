import { StyledLogoText, StyledLogoWrapper } from "./Logo.styled";

const Logo = () => {
    return (
        <StyledLogoWrapper to="/">
            <StyledLogoText>
                N<span>orway</span>U
            </StyledLogoText>
        </StyledLogoWrapper>
    );
};

export default Logo;
