import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import ExpresionsPage from "./expressionsPage";
import Header from "../components/Header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <ExpresionsPage />
            <Outlet />
        </>
    );
};

export default Layout;
