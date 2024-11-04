import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RuleQuestion = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Питання (Spørsmål)</StyledRuleHeader>
            <StyledRuleDescription>
                Запитання утворюються дуже просто - за допомогою запитальних
                слів, дієслово залишається як завжди на другому місці.
                <br />
                <span>Hva</span> - Що?{" "}
                <i>"Hva gjorde du i går?" ("Що робив учора?")</i>
                <br />
                <span>Hvem</span> - Хто?{" "}
                <i>"Hvem er vennen din?" ("Хто твій друг?")</i>
                <br />
                <span>Hvordan</span> - Як?{" "}
                <i>
                    "Hvordan sier du dette på norsk?" ("Як сказати це
                    норвезькою?")
                </i>
                <br />
                <span>Hvorfor</span> - Чому?{" "}
                <i>
                    "Hvorfor kom han ikke til skolen?" ("Чому він не прийшов до
                    школи?")
                </i>
                <br />
                <span>Hvor</span> - Де? <i>"Hvor bor du?" ("Де ти живеш?")</i>
                <br />
                <span>Hvilke</span> - Якими/Які?{" "}
                <i>"Hvilke språk snakker du?" ("Якими мовами говориш ти?")</i>
                <br />
            </StyledRuleDescription>

            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Питання "яким"
                змінюється в залежності від роду - <span>Hvilket</span> - Яке,{" "}
                <span>Hvilken</span> - Який, , <span>Hvilke</span> - Які.
            </StyledAlert>

            <StyledRuleDescription>
                <span>Ja/Nei Spørsmål</span> (Так/Ні питання) - це питання, на
                які можна відповісти так чи ні. У таких питаннях{" "}
                <span>дієслово </span>
                пересувається на <span>перше місце</span> в реченні!
                <br />
                <span>Liker du epler?</span> - Подобаються тобі яблука?
                <br />
                <span>Kan hun lese?</span> - Вона вміє читати?
                <br />
                <span>Har du vært i Oslo før?</span> - Ти був у Осло раніше?
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};

export default RuleQuestion;