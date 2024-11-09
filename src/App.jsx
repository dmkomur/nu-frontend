import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GrammarPage from "./pages/GrammarPage";
import ExpressionsPage from "./pages/ExpressionsPage";
import Rule from "./components/Rules/Rule";
import ReactGA from "react-ga4"; // Импортируем react-ga4
import { useEffect } from "react";

function App() {
    const location = useLocation();
    useEffect(() => {
        ReactGA.initialize("G-PJ0Y6LJN46");
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/grammar" element={<GrammarPage />}>
                    <Route path=":rule" element={<Rule />} />
                </Route>
                <Route
                    path="/expressions"
                    element={<ExpressionsPage />}
                ></Route>
            </Route>
        </Routes>
    );
}

export default App;
