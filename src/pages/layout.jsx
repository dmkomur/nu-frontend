import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";

const Layout = () => {
    return (
        <>
            <Hero />
            <Outlet />
        </>
    );
};

export default Layout;
