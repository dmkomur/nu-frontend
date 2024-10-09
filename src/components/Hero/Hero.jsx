import {
    HeroContent,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
} from "./Hero.styled";
import Logo from "../Logo/Logo";
import Container from "../common/container/Container";

const Hero = () => {
    return (
        <Container>
            <HeroSection>
                <Logo />
                <HeroContent>
                    <HeroTitle>Explore the Fjords</HeroTitle>
                    <HeroSubtitle>Discover the beauty of nature</HeroSubtitle>
                </HeroContent>
            </HeroSection>
        </Container>
    );
};

export default Hero;
