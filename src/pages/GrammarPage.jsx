import { Outlet } from "react-router-dom";
import Container from "../components/common/container/Container";
import { NavLink } from "react-router-dom";
import StyledSectionHeader from "../components/common/sectionHeader/SectionHeader.styled";
const GrammarPage = () => {
    const rules = ["sentences", "pronumen"];
    return (
        <Container>
            <StyledSectionHeader>Граматика норвезької мови</StyledSectionHeader>
            <nav>
                <ul>
                    {rules.map((rule) => (
                        <li key={rule}>
                            <NavLink to={rule}>
                                {rule.charAt(0).toUpperCase() + rule.slice(1)}
                                Rule
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </Container>
    );
};

export default GrammarPage;
