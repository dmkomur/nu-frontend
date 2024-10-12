import { StyledHeaderWrapper } from "./Header.styled";
import Logo from "../Logo/Logo";
import Container from "../common/container/Container";
import Navigation from "../Navigation/Navigation";
const Header = () => {
    return (
        <Container>
            <StyledHeaderWrapper>
                <Logo />
                <Navigation />
            </StyledHeaderWrapper>
        </Container>
    );
};

export default Header;
