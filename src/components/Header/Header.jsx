import { StyledHeaderWrapper } from "./Header.styled";
import Logo from "../Logo/Logo";
import Container from "../common/container/Container";

const Header = () => {
    return (
        <Container>
            <StyledHeaderWrapper>
                <Logo />
            </StyledHeaderWrapper>
        </Container>
    );
};

export default Header;
