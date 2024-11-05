import {
    StyledFooter,
    StyledFooterLink,
    StyledFooterLinkWrapper,
} from "./Footer.styled";
import Container from "../common/container/Container";
import { StyledFooterLinkList } from "./Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledFooterLinkWrapper>
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
                    </StyledFooterLinkList>
                    <StyledFooterLinkList>
                        <li>
                            <StyledFooterLink
                                href="https://lexin.oslomet.no/#/findwords/message.bokmal-russian"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Lexin
                            </StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink
                                href="https://ordbokene.no/nno"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Ordbøkene
                            </StyledFooterLink>
                        </li>
                    </StyledFooterLinkList>
                    <StyledFooterLinkList>
                        <li>
                            <StyledFooterLink
                                href="https://www.finn.no/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Finn
                            </StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink
                                href="https://arbeidsplassen.nav.no/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Arbeidsplassen
                            </StyledFooterLink>
                        </li>
                    </StyledFooterLinkList>
                </StyledFooterLinkWrapper>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
