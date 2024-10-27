import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RuleVerb = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>
                Дієслово: інфінітив та теперішній час (Verb: infinitiv og
                presens)
            </StyledRuleHeader>
            <StyledRuleDescription>
                Дієслово у норвезькій мові це обов'язкова частина будь-якого
                речення. Дієслова мають кілька форм, але тут ми розглянемо дві
                початкові форми.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Інфінітів</span> - невизначена форма дієслова, вона ж
                початкова. У самостійному вигляді не використовується.
                <i> Наприклад: "å spise" ("їсти")</i>. <br />
                <span>"å"</span> - є обов'язковим показником інфінітиву.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Дієслово <span>теперішнього часу</span> утворюється, в більшості
                випадків, шляхом додавання закінчення <span>"r"</span> і
                відкидається показник інфінітиву <span>"å"</span>.{" "}
                <i>Наприклад: "Spiser" ("Їм").</i>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Для <span>заперечення</span> достатньо поставити слово "
                <span>ikke</span>" після дієслова.
                <i>
                    {" "}
                    Наприклад: "Jeg liker ikke balalaikaen" ("Мені не
                    подобається балалайка").
                </i>
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>У норвезькій мові
                дієслова класифікуються як сильні (<span>sterke verb</span>) та
                слабкі (<span>svake verb</span>). <br />
                Слабкі дієслова змінюються за визначеними принципами.{" "}
                <i> Наприклад: "å spise - spiser - spiste"</i>.<br /> Сильні
                дієслова змінюються в індивідуальному порядку.{" "}
                <i> Наприклад: "å være - er - var"</i>.
            </StyledAlert>

            <StyledRuleDescription>
                З теперішнім часом все дуже просто, ставимо дієслово у формі
                теперішнього часу і не знаємо клопоту.
                <br />
                <span>Jeg spiser brød</span> - Я їм хліб.
                <br />
                <span>Du er smart</span> - Ти розумний.
                <br />
                <span>Rødhårede Stepan leser en bok</span> - Рудий Степан читає
                книгу.
            </StyledRuleDescription>

            <StyledRuleDescription>
                Цікавіше стає коли у нас в реченні два дієслова поспіль.
                <i> Наприклад: "Я люблю грати у футбол".</i> Що робити? Робити
                треба так само як і в нашій мові - перше дієслово ставимо в
                теперішній час ("люблю" - "liker") а друге дієслово ставимо в
                дієслово ставимо в інфінітив ("грати" - "å spille").
                <br />
                <span>Jeg liker å spille fotball</span> - Я люблю грати у
                футбол.
                <br />
                <span>Jeg prøver å snakke norsk</span> - Я пробую говорити
                норвезькою.
                <br />
                <span>Liker hun å sykle?</span> - Вона любить кататися
                велосипедом?
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RuleVerb;
