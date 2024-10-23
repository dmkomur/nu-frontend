import { StyledFooter, StyledFooterLink } from "./Footer.styled";
import Container from "../common/container/Container";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledFooterLink
                    href="https://www.nav.no/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    NAV
                </StyledFooterLink>
                <StyledFooterLink
                    href="https://www.udi.no/uk/information-ukraine-and-russia/ukraine/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    UDI
                </StyledFooterLink>
                <StyledFooterLink href="#logo">UP</StyledFooterLink>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
