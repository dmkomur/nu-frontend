import {
    HeroContent,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
} from "./Hero.styled";
import Container from "../common/container/Container";

const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <HeroContent>
                    <HeroTitle>Крок до Норвегії</HeroTitle>
                    <HeroSubtitle>
                        Інтегруйся в нове життя з норвезькою мовою
                    </HeroSubtitle>
                </HeroContent>
            </Container>
        </HeroSection>
    );
};

export default Hero;
