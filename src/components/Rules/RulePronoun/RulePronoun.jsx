import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import { StyledRulePronoumWrapper } from "./RulePronoun.styled";

const RulePronoun = () => {
    return (
        <StyledRulePronoumWrapper>
            <StyledRuleHeader>Займенник</StyledRuleHeader>
            <StyledRuleDescription>
                Займе́нник — це самостійна частина мови, що вказує на особу чи
                предмет, але не називає їх. В норвезькій мові займенники бувають
                двох типів - <span>суб'єктний </span>(subjektsform) та{" "}
                <span>об'єктний </span>(objektsform).
            </StyledRuleDescription>
            <StyledRuleDescription>
                Суб'єктний — той що знаходиться у суб'єктній частині речення
                <span> S</span>VO.{" "}
                <i>
                    Наприклад: "<span>Hun</span> liker katt" ("<span>Вона</span>{" "}
                    любить кота")
                </i>
                .
            </StyledRuleDescription>
            <StyledRuleDescription>
                Об'єктний — той що знаходиться у об'єктній частині речення SV
                <span>O</span>.{" "}
                <i>
                    Наприклад: "Katt liker <span>henne</span>" ("Кіт любить{" "}
                    <span>її</span>")
                </i>
                .
            </StyledRuleDescription>

            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Важливо розуміти де
                ми використовуємо займенник щоб не виходило щось типу:{" "}
                <i>
                    <span>"Hun liker hun"</span> ("Вона любить вона").
                </i>
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
                <i>(про жіночий або чоловічий рід але не людину)</i>.
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
                <i>(про жіночий або чоловічий рід але не людину)</i>.
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
        </StyledRulePronoumWrapper>
    );
};

export default RulePronoun;
