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
            <StyledRuleDescription>
                Підрядні речення зі сполучниками <span>Da</span> (Тоді/Тоді як)
                та <span>Når </span>(Коли) мають іншу будову і підрядна частина,
                найчастіше, йде першою, а потім основна. Загалом можна сказати,
                що обидва варіанти і "Da" і "Når" можна перекласти як "Коли",
                але перший використовується для минулого, а другий для
                майбутнього і теперішнього, але щоб уникнути плутанини краще
                запам'ятати їх як "Тоді" і "Коли".
                <br />
                Сполучник ставиться на початок підрядної частини але вважається
                на нульовому місці, тому підрядна частина будується за принципом
                "<span>SVO</span>". А ось основна частина речення змінюється і{" "}
                <span>починається з дієслова на першому місці</span>, а суб'єкт
                йде на друге місце.
                <br />
                <span>Da</span> використовується в підрядній частині та описує
                минуле.
                <br />
                <i>
                    Наприклад: "<span>Da</span> jeg var liten, bodde jeg i
                    Ukraina" - "<span>Тоді як</span> я був маленьким, жив я в
                    Україні".
                </i>
                <br />У нашій мові ми можемо в будь-якому випадку
                використовувати "коли" але в нормізькій мові при описі минулого
                важливо використовувати правильне причастя <span>"Da"</span>.
                <br />
                <span>Når </span> використовується для опису майбутнього та
                регулярних дій.
                <br />
                <i>
                    Наприклад: "<span>Når</span> jeg blir gammel, skal jeg
                    flytte til Tunisia" - "<span>Коли</span> я стану старим,
                    переїду я до Тунісу".
                </i>
                <br />
                <i>
                    Приклад: "<span>Når</span> jeg går på skolen, lærer jeg
                    mange nye ord" - "<span>Коли</span> я ходжу до школи, вивчаю
                    я багато нових слів".
                </i>
                <br />У випадках коли основна частина йде першою, її структура
                буде класична <span>SVO</span>.
                <br />
                <i>
                    Наприклад: "Barna blir alltid begeistret <span>når</span> de
                    får is" - "Діти завжди в захваті, <span>коли</span>{" "}
                    отримують морозиво".
                </i>
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RuleLeddsetning;
