import { useParams } from "react-router-dom";
import RulePronumen from "./RulePronumen/RulePronumen";
import RuleSentences from "./RuleSentences/RuleSentences";

function Rule() {
    const { rule } = useParams(); // Получаем параметр rule из URL

    const renderRule = () => {
        switch (rule) {
            case "sentences":
                return <RuleSentences />;
            case "pronumen":
                return <RulePronumen />;
            default:
                return <p>Please select a valid grammar rule.</p>;
        }
    };

    return <div>{renderRule()}</div>;
}

export default Rule;
