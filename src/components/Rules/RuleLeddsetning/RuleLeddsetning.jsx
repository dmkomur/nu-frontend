import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RuleLeddsetning = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Підрядне речення (Laddsetning)</StyledRuleHeader>
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
                <StyledRuleExample>
                    Наприклад: "Jeg sier <span>at jeg liker høsten</span>" - "Я
                    кажу, <span>що</span> я люблю осінь".
                </StyledRuleExample>
                <br />
                Як видно у прикладі, друга (підрядна) частина речення не здатна
                бути самостійною і звучить дивно - "
                <span>at jeg liker høsten</span>" - "що я люблю осінь".
                <br />
                <StyledRuleExample>
                    Приклад: "Hun spør
                    <span> om det var godt i hytta</span>" - "Вона запитує,{" "}
                    <span>чи</span> добре було в хатині".
                </StyledRuleExample>
                <br />З сполучникам "Om" ситуація така сама, для зручності
                розуміння можна його перекласти як "про те".
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Часто нам потрібно
                поміняти займенник у підрядній частині речення.{" "}
                <StyledRuleExample>
                    Наприклад: "Mark sier: <span>Jeg</span> liker å fiske" -
                    "Марк каже: <span>Я</span> люблю рибалити" = "Han sier at{" "}
                    <span>han</span> liker å fiske" - "Він каже що{" "}
                    <span>він</span> любить рибалити".
                </StyledRuleExample>
            </StyledAlert>
            <StyledRuleDescription>
                Підрядні речення зі сполучниками <span>Da</span> (Тоді/Тоді як)
                та <span>Når </span>(Коли). <br />
                Загалом можна сказати, що обидва варіанти і "Da" і "Når" можна
                перекласти як "Коли", але перший використовується для минулого,
                а другий для майбутнього і теперішнього, але щоб уникнути
                плутанини краще запам'ятати їх як "Тоді" і "Коли".
                <br />
                Cтруктура речення залежить від того де знаходиться підрядна
                частина. <br />У випадках коли підрядна частина йде другою,
                структура основної буде класична <span>SVO</span>.
                <br />
                <StyledRuleExample>
                    Наприклад: "<span>Barna blir alltid begeistret</span> når de
                    får is" - "<span>Діти завжди в захваті</span>, коли вони
                    отримують морозиво".
                </StyledRuleExample>
                <br />
                Коли ж підрядна частина йде першою, структура основної буде
                <span> VSO</span>, тобто починатися з дієслова.
                <br />
                <StyledRuleExample>
                    Наприклад: "Da jeg var liten,{" "}
                    <span>bodde jeg i Ukraina</span>" - "Тоді як я був
                    маленьким, <spanm>жив я в Україні</spanm>".
                </StyledRuleExample>
                <br />
                <span>Da</span> використовується в підрядній частині та описує
                минуле.
                <br />
                <StyledRuleExample>
                    Наприклад: "Hun bodde i Spania <span>da</span> hun var
                    liten" - "Вона жила в Іспанії<span> тоді як</span> вона була
                    маленька".
                </StyledRuleExample>
                <br />
                <span>Når </span> використовується для опису майбутнього та
                регулярних дій.
                <br />
                <StyledRuleExample>
                    Наприклад: "<span>Når</span> jeg blir gammel, skal jeg
                    flytte til Tunisia" - "<span>Коли</span> я стану старим,
                    переїду я до Тунісу".
                </StyledRuleExample>
                <br />
                <StyledRuleExample>
                    Приклад: "<span>Når</span> jeg går på skolen, lærer jeg
                    mange nye ord" - "<span>Коли</span> я ходжу до школи, вивчаю
                    я багато нових слів".
                </StyledRuleExample>
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RuleLeddsetning;
