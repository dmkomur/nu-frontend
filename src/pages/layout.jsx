import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import ExpresionsPage from "./expressionsPage";

const Layout = () => {
    return (
        <>
            <Hero />
            <ExpresionsPage />
            <Outlet />
        </>
    );
};

export default Layout;
