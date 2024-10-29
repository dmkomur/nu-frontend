import { StyledFooter, StyledFooterLink } from "./Footer.styled";
import Container from "../common/container/Container";
import { StyledFooterLinkList } from "./Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledFooterLinkList>
                    <li>
                        <StyledFooterLink
                            href="https://www.nav.no/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            NAV
                        </StyledFooterLink>
                    </li>
                    <li>
                        <StyledFooterLink
                            href="https://www.udi.no/uk/information-ukraine-and-russia/ukraine/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            UDI
                        </StyledFooterLink>
                    </li>
                    <li>
                        <StyledFooterLink href="#logo">UP</StyledFooterLink>
                    </li>
                </StyledFooterLinkList>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
