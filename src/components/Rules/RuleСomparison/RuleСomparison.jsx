import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
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
                Більшість прикметників отримують закінчення &quot;
                <span>-ere</span>&quot; коли вказують який іменник
                &quot;більший&quot;.
                <br />
                <StyledRuleExample>
                    Приклади: &quot;<span>fin - finnere</span>&quot; -
                    &quot;приємний — приємніший&quot;, &quot;
                    <span>lys - lysere</span>&quot; - &quot;світлий -
                    світліший&quot;.
                </StyledRuleExample>
                <br />
                Щоб сказати &quot;най&quot; до прикметника додають закінчення
                &quot;
                <span>-est</span>&quot;.
                <br />
                <StyledRuleExample>
                    Нариклад: &quot;<span>lys - lysere - lysest</span>&quot; -
                    &quot;світлий - світліший - най світліший&quot;.
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Деякі прикметники не змініються за стандартною схемою, тому є
                універсальний метод.
                <br />
                <StyledRuleExample>
                    Нариклад: &quot;praktisk - <span>mer </span>praktisk -{" "}
                    <span>mest </span>praktisk&quot; - &quot;практичний -{" "}
                    <span>більш </span>
                    практичний - <span>най більш </span> практичний&quot;.
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
                використання &quot;<span>derfor</span>&quot; та &quot;
                <span>fordi</span>&quot;. <br />
                <span>Derfor</span> - тому. Вказує на <span>слідство </span>
                та використовується у відповідних частинах речення.
                <br />
                <span>Frodi</span> - через те що. Вказує на <span>причину</span>
                .
                <br />
                <StyledRuleExample>
                    Нариклади: &quot;I dag er bursdagen min. Jeg baker en
                    kake.&quot; - &quot;Сьогодні мій день народження. Я печу
                    торт.&quot;
                    <br />
                    &quot;I dag er bursdagen min{" "}
                    <span>derfor baker jeg en kake</span>&quot; - &quot;Cьогодні
                    мій день народження, <span>тому печу я торт</span>&quot;.
                    <br />
                    &quot;Jeg baker en kake{" "}
                    <span> fordi det er bursdagen min i dag</span>&quot; -
                    &quot;Я печу торт{" "}
                    <span>через те що мій день народження сьогодні</span>
                    &quot;.
                    <br />
                    &quot;<span>Fordi i dag er det bursdagen min</span>, baker
                    jeg en kake&quot; - &quot;{" "}
                    <span>Через те що сьогодні мій день народження</span>, я
                    печу торт&quot;.
                </StyledRuleExample>
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RuleСomparison;
