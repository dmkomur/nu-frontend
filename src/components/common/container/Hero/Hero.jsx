import {
    HeroContent,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
} from "./Hero.styled";
import Container from "../Container";

const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <HeroContent>
                    <HeroTitle>Explore the Fjords</HeroTitle>
                    <HeroSubtitle>Discover the beauty of nature</HeroSubtitle>
                </HeroContent>
            </Container>
        </HeroSection>
    );
};

export default Hero;
