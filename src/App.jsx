import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import GrammarPage from "./pages/GrammarPage";
import ExpresionsPage from "./pages/ExpressionsPage";
import Rule from "./components/Rules/Rule";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/grammar" element={<GrammarPage />}>
                    <Route path=":rule" element={<Rule />} />
                </Route>
                <Route path="/expressions" element={<ExpresionsPage />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
