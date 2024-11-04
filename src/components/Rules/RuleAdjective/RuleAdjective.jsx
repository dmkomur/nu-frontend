import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RuleAdjective = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Прикметник (Adjektiv)</StyledRuleHeader>
            <StyledRuleDescription>
                Прикметник описує іменник і змінюється залежно від роду
                іменника, а також від того изначена чи невизначена форма іменник
                використовується в реченні.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Невизначена форма <span>(Ubestemt form)</span>:
                <br />В однині чоловічого і жіночого родів залишаємо прикметник
                у первинному вигляді.
                <br /> En<span> blå </span>bil - синій автомобіль.
                <br /> Ei<span> blå </span>lampe - синя лампа.
                <br />У середньому роді однини до закінчення прикметника
                додається <span>t</span>.
                <br />
                Et <span>gammelt</span> glass - старе скло.
                <br />У множині до закінчення прикметника додається{" "}
                <span>e</span>.
                <br />
                <span>Nye</span> dager - нові дні.
            </StyledRuleDescription>
            <StyledRuleDescription>
                В визначеній формi <span>(Bestemt form)</span> незалежно від
                роду та числа до закінчення прикметника додається <span>e</span>
                .
                <br />
                <span>Den norske boka –</span> - (певна) норвезька книга.
                <br />
                <span>De norske ordene</span> - (певні) норвезькі слова.
            </StyledRuleDescription>

            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Це лише базові
                правила використання прикметника. На практиці є дуже багато
                винятків та граматичних змін. Завчити все дуже складно, та й
                немає в цьому необхідності. Краще запам'ятовувати у міру
                використання.
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleAdjective;
