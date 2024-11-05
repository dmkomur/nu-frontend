import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RuleLeddsetning = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>
                Підрядне речення (Laddsetninger)
            </StyledRuleHeader>
            <StyledRuleDescription>
                У граматиці це означає <span>залежне речення</span>, яке не може
                існувати окремо і додає додаткову інформацію до головного
                речення. Підрядні речення можуть вводитися сполучниками та
                виконують різні функції, такі як визначення, пояснення, вказівка
                на час, причину тощо.
            </StyledRuleDescription>

            <StyledRuleDescription>
                Підрядні речення зі сполучниками <span>At</span> (Що) та{" "}
                <span>Om </span>(Чи). <br />
                Основна частина речення як завжди будується за принципом{" "}
                <span>SVO</span>, підрядна частина починається з сполучника{" "}
                <span>At</span> або <span>Om </span> але вважається що сполучник
                займає "нульову" позицію, далі речення будується за загальним
                принципом із дієсловом на другому місці.
                <br />
                <i>
                    Наприклад: "Jeg sier <span>at jeg liker høsten</span>" - "Я
                    кажу, <span>що</span> я люблю осінь".
                </i>
                <br />
                Як видно у прикладі, друга (підрядна) частина речення не здатна
                бути самостійною і звучить дивно - "
                <span>at jeg liker høsten</span>" - "що я люблю осінь".
                <br />
                <i>
                    Приклад: "Hun spør
                    <span> om det var godt i hytta</span>" - "Вона запитує,{" "}
                    <span>чи</span> добре було в хатині".
                </i>
                <br />З сполучникам "Om" ситуація така сама, для зручності
                розуміння можна його перекласти як "про те".
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Часто нам потрібно
                поміняти займенник у підрядній частині речення.{" "}
                <i>
                    Наприклад: "Mark sier: <span>Jeg</span> liker å fiske" -
                    "Марк каже: <span>Я</span> люблю рибалити" = "Han sier at{" "}
                    <span>han</span> liker å fiske" - "Він каже що{" "}
                    <span>він</span> любить рибалити".
                </i>
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleLeddsetning;
