import {
    StyledLogoPic,
    StyledLogoText,
    StyledLogoWrapper,
} from "./Logo.styled";

const Logo = () => {
    return (
        <StyledLogoWrapper>
            <StyledLogoPic src="/src/assets/logo.png" />
            <StyledLogoText>NorwayU</StyledLogoText>
        </StyledLogoWrapper>
    );
};

export default Logo;
