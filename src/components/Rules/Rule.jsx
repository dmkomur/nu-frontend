import { useParams } from "react-router-dom";
import RulePronoun from "./RulePronoun/RulePronoun";
import RuleSentences from "./RuleSentences/RuleSentences";
import RuleNouns from "./RuleNouns/RuleNouns";

function Rule() {
    const { rule } = useParams();
    const renderRule = () => {
        switch (rule) {
            case "sentences":
                return <RuleSentences />;
            case "pronoun":
                return <RulePronoun />;
            case "nouns":
                return <RuleNouns />;
            default:
                return <p>Please select a valid grammar rule.</p>;
        }
    };

    return <div>{renderRule()}</div>;
}

export default Rule;
