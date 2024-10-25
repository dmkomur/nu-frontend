import { Outlet } from "react-router-dom";
import Container from "../components/common/container/Container";
import { NavLink } from "react-router-dom";
import StyledSectionHeader from "../components/common/sectionHeader/SectionHeader.styled";
const GrammarPage = () => {
    const rules = [
        {
            ruleName: "sentences",
            ruleLable: "Будова речення",
        },
        {
            ruleName: "pronoun",
            ruleLable: "Займенник (Pronomen)",
        },
    ];
    return (
        <Container>
            <StyledSectionHeader>Граматика норвезької мови</StyledSectionHeader>
            <nav>
                <ul>
                    {rules.map((rule) => (
                        <li key={rule.ruleName}>
                            <NavLink to={rule.ruleName}>
                                {rule.ruleLable}
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
