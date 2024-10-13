import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import GrammarPage from "./pages/GrammarPage";
import ExpresionsPage from "./pages/ExpressionsPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/grammar" element={<GrammarPage />}></Route>
                <Route path="/expressions" element={<ExpresionsPage />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
