import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
