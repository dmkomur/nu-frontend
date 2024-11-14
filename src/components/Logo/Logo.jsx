import {
    StyledLogoText,
    StyledLogoWrapper,
    StyledLogoLetterBlue,
} from "./Logo.styled";

const Logo = () => {
    return (
        <StyledLogoWrapper to="/" id="logo">
            <StyledLogoText>
                <StyledLogoLetterBlue>i</StyledLogoLetterBlue>N
                <StyledLogoLetterBlue>o</StyledLogoLetterBlue>r
                <StyledLogoLetterBlue>s</StyledLogoLetterBlue>k
            </StyledLogoText>
        </StyledLogoWrapper>
    );
};

export default Logo;
