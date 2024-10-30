import { useParams } from "react-router-dom";
import RulePronoun from "./RulePronoun/RulePronoun";
import RuleSentences from "./RuleSentences/RuleSentences";
import RuleNouns from "./RuleNouns/RuleNouns";
import RuleDate from "./RuleDate/RuleDate";
import RuleVerb from "./RuleVerb/RuleVerb";
import RuleModal from "./RuleModal/RuleModal";
import RuleImperative from "./RuleImperative/RuleImperative";
import RuleLocation from "./RuleLocation/RuleLocation";

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
            case "date":
                return <RuleDate />;
            case "verb":
                return <RuleVerb />;
            case "modal":
                return <RuleModal />;
            case "imperative":
                return <RuleImperative />;
            case "location":
                return <RuleLocation />;
            default:
                return <p>Please select a valid grammar rule.</p>;
        }
    };

    return <div>{renderRule()}</div>;
}

export default Rule;
