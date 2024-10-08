import { Outlet } from "react-router-dom";
import Container from "../components/common/container/Container";
import Hero from "../components/common/container/Hero/Hero";

const Layout = () => {
    return (
        <>
            <Container>
                <Hero />
                <h1>NorwayU</h1>
            </Container>
            <Outlet />
        </>
    );
};

export default Layout;
