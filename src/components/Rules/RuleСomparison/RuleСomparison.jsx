import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RuleСomparison = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Порівняння (Komarative)</StyledRuleHeader>
            <StyledRuleDescription>
                Ми використовуємо порівняння, коли говоримо про щось схоже, в
                новежській мові це працює досить просто.
                <br />
                Більшість прикметників отримують закінчення "<span>-ere</span>"
                коли вказують який іменник "більший".
                <br />
                <StyledRuleExample>
                    Приклади: "<span>fin - finnere</span>" - "приємний —
                    приємніший", "<span>lys - lysere</span>" - "світлий -
                    світліший".
                </StyledRuleExample>
                <br />
                Щоб сказати "най" до прикметника додають закінчення "
                <span>-est</span>".
                <br />
                <StyledRuleExample>
                    Нариклад: "<span>lys - lysere - lysest</span>" - "світлий -
                    світліший - най світліший".
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Деякі прикметники не змініються за стандартною схемою, тому є
                універсальний метод.
                <br />
                <StyledRuleExample>
                    Нариклад: "praktisk - <span>mer </span>praktisk -{" "}
                    <span>mest </span>praktisk" - "практичний -{" "}
                    <span>більш </span>
                    практичний - <span>най більш </span> практичний".
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Також є невелика кількість прикметників, які мають унікальні
                форми:
                <br />
                <span>Liten - mindre - minst</span> - Малий - менше - найменше.
                <br />
                <span>Store - større - størst</span> - Великий — більший —
                найбільший.
                <br />
                <span>God - bedre - best</span> - Добре - краще - найкраще.
                <br />
                <span>Gammel - eldre - eldst</span> - Старий — старший —
                найстарший.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Хоча це не порівняння а зіставлення, але треба пояснити
                використання "<span>derfor</span>" та "<span>fordi</span>".{" "}
                <br />
                <span>Derfor</span> - тому. Вказує на <span>слідство </span>
                та використовується у відповідних частинах речення.
                <br />
                <span>Frodi</span> - через те що. Вказує на <span>причину</span>
                .
                <br />
                <StyledRuleExample>
                    Нариклади: "I dag er bursdagen min. Jeg baker en kake." -
                    "Сьогодні мій день народження. Я печу торт."
                    <br />
                    "I dag er bursdagen min{" "}
                    <span>derfor baker jeg en kake</span>" - "Cьогодні мій день
                    народження, <span>тому печу я торт</span>".
                    <br />
                    "Jeg baker en kake{" "}
                    <span> fordi det er bursdagen min i dag</span>" - "Я печу
                    торт <span>через те що мій день народження сьогодні</span>
                    ".
                    <br />"<span>Fordi i dag er det bursdagen min</span>, baker
                    jeg en kake" - "{" "}
                    <span>Через те що сьогодні мій день народження</span>, я
                    печу торт".
                </StyledRuleExample>
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RuleСomparison;
