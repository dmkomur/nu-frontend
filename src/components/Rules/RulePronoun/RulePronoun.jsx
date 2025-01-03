import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RulePronoun = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Займенник (Pronomen)</StyledRuleHeader>
            <StyledRuleDescription>
                Займе́нник — це самостійна частина мови, що вказує на особу чи
                предмет, але не називає їх. В норвезькій мові займенники бувають
                двох типів - <span>суб'єктний </span>(subjektsform) та{" "}
                <span>об'єктний </span>(objektsform).
            </StyledRuleDescription>
            <StyledRuleDescription>
                Суб'єктний — той що знаходиться у суб'єктній частині речення
                <span> S</span>VO.{" "}
                <StyledRuleExample>
                    Наприклад: "<span>Hun</span> liker katt" ("<span>Вона</span>{" "}
                    любить кота")
                </StyledRuleExample>
                .
            </StyledRuleDescription>
            <StyledRuleDescription>
                Об'єктний — той що знаходиться у об'єктній частині речення SV
                <span>O</span>.{" "}
                <StyledRuleExample>
                    Наприклад: "Katt liker <span>henne</span>" ("Кіт любить{" "}
                    <span>її</span>")
                </StyledRuleExample>
                .
            </StyledRuleDescription>

            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Важливо розуміти де
                ми використовуємо займенник щоб не виходило щось типу:{" "}
                <StyledRuleExample>
                    <span>"Hun liker hun"</span> ("Вона любить вона").
                </StyledRuleExample>
            </StyledAlert>

            <StyledRuleDescription>
                <span>Cуб'єктні займенники в однині:</span>
                <br />
                <span>Jeg</span> - Я.
                <br />
                <span>Du</span> - Ти.
                <br />
                <span>Han</span> - Він <i>(про людину)</i>.
                <br />
                <span>Hun</span> - Вона <i>(про людину)</i>.
                <br />
                <span>Den</span> - Він/Вона{" "}
                <StyledRuleExample>
                    (про жіночий або чоловічий рід але не людину)
                </StyledRuleExample>
                .
                <br />
                <span>Det</span> - Воно.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Cуб'єктні займенники в множині:</span>
                <br />
                <span>Vi</span> - Ми.
                <br />
                <span>Dere</span> - Ви.
                <br />
                <span>De</span> - Вони.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Об'єктні займенники в однині:</span>
                <br />
                <span>Meg</span> - Мене/Мені.
                <br />
                <span>Deg</span> - Тебе/Тобі.
                <br />
                <span>Ham/Han</span> - Його/Йому <i>(про людину)</i>.
                <br />
                <span>Henne</span> - Її/Їй <i>(про людину)</i>.
                <br />
                <span>Den</span> - Його/Йому/Її/Їй{" "}
                <StyledRuleExample>
                    (про жіночий або чоловічий рід але не людину)
                </StyledRuleExample>
                .
                <br />
                <span>Det</span> - Його/Йому <i>(про середній рід)</i>.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Об'єктні займенники в множині:</span>
                <br />
                <span>Oss</span> - Нас/Нам.
                <br />
                <span>Dere</span> - Вас/Вам.
                <br />
                <span>Dem</span> - Їх/Їм.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Важливим варіантом вказівки на певний іменник є використання
                займенників:
                <br />
                <span>Den</span> - den bilen ("той автомобіль").
                <br />
                <span>Det</span> - det huset ("той дім").
                <br />
                <span>De</span> - de bilene ("ті автомобілі").
                <br />
                <span>Denne</span> - denne boka ("ось ця книга").
                <br />
                <span>Dette</span> - dette huset ("ось цей дім").
                <br />
                <span>Disse</span> - disse bilene ("ось ці автомобілі").
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};

export default RulePronoun;
