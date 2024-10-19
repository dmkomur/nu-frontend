import { Outlet } from "react-router-dom";
import Container from "../components/common/container/Container";
import { NavLink } from "react-router-dom";

const GrammarPage = () => {
    return (
        <Container>
            <h2>I am Grammar page</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="sentences">Sentences Rule</NavLink>
                    </li>
                    <li>
                        <NavLink to="pronumen">Pronumen Rule</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </Container>
    );
};

export default GrammarPage;
