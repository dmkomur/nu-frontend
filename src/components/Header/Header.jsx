import { StyledHeaderWrapper } from "./Header.styled";
import Logo from "../Logo/Logo";
import Container from "../common/container/Container";
import Navigation from "../Navigation/Navigation";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
const Header = () => {
    return (
        <Container>
            <StyledHeaderWrapper>
                <Logo />
                <Navigation />
                <ScrollUpButton />
            </StyledHeaderWrapper>
        </Container>
    );
};

export default Header;
