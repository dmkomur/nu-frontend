import {
    StyledLogoText,
    StyledLogoWrapper,
    StyledLogoLetterBlue,
} from "./Logo.styled";

const Logo = () => {
    return (
        <StyledLogoWrapper to="/" id="logo">
            <StyledLogoText>
                <StyledLogoLetterBlue>u</StyledLogoLetterBlue>N
                <StyledLogoLetterBlue>o</StyledLogoLetterBlue>r
                <StyledLogoLetterBlue>g</StyledLogoLetterBlue>e
            </StyledLogoText>
        </StyledLogoWrapper>
    );
};

export default Logo;
