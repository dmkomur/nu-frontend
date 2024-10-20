import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <Outlet />
        </>
    );
};

export default Layout;
