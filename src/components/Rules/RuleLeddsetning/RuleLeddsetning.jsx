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
                <br />Є один важливий момент який стосується всіх видів
                підрядних речення - коли підрядна частина речення стоїть другою
                сагальному реченні - слова "ikke" (не), "altid" ("завжди") і
                "aldri" (ніколи) ставитися перед дієсловом!{" "}
                <StyledRuleExample>
                    "Jeg sa at jeg <span>ikke</span> liker lakris" - "Я сказав
                    що мені не подобається лакриця".
                </StyledRuleExample>
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
                    Наприклад: "Jeg sier <span>at jeg ikke liker høsten</span>"
                    - "Я кажу, <span>що</span> я не люблю осінь".
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
            <StyledRuleDescription>
                Підрядні речення зі сполучником <span>Som</span>. <br />
                Загалом сполучником "Som" з'єднує два речення в одне, і в
                підрядній частині виконує функції суб'єкта або об'єкта.
                <br />
                <span>Som</span> - як, який, яка, які, яким, з яким, якого...
                "Som" - це швейцарський ніж. <br />
                Основна частина речення будується стандартно - <span>SVO</span>,
                з підрядною будем розбиратись на прикладах.
                <br />
                Припустим ми хочемо скласти з двох речень одне -{" "}
                <StyledRuleExample>"Я маю друга"</StyledRuleExample> та{" "}
                <StyledRuleExample>"Він живе в Осло"</StyledRuleExample>.
                Українською ми скажем приблизно так -{" "}
                <StyledRuleExample>
                    "Я маю друга, який живе в Осло"
                </StyledRuleExample>
                . Теж саме нам потрібно реалізувати норвежською.
                <br />
                Основана частина -
                <StyledRuleExample> "Jeg har en venn"</StyledRuleExample>,
                підрядна -{" "}
                <StyledRuleExample>
                    "<span>som</span> bor i Oslo".
                </StyledRuleExample>{" "}
                У нашому прикладі "som" виконує роль <span>суб'єкта</span> і
                дієслово cтоїть відразу за ним -{" "}
                <StyledRuleExample>
                    "Jeg har en venn som bor i Oslo".
                </StyledRuleExample>
                <br />
                Тепер складемо інші речення в одне.{" "}
                <StyledRuleExample>
                    "Ми будемо дивитися фільм"
                </StyledRuleExample>{" "}
                та <StyledRuleExample>"Я бачив фільм раніше"</StyledRuleExample>
                . В нас вийде -{" "}
                <StyledRuleExample>
                    "Ми будемо дивитися фільм <span>який</span> я бачив раніше".
                </StyledRuleExample>{" "}
                Норвезькую буде так -{" "}
                <StyledRuleExample>
                    Vi skal se en film <span>som</span> jeg har sett før
                </StyledRuleExample>
                . В підрядній частині "som" виконує роль <span>об'єкта</span>,
                cуб'єктом є "jeg" (я) - той хто виконую дію в підрядній частині.
                Таким чином після "som" ми ставимо суб'єкт і дієслово{" "}
                <span>SV</span>, а об'єкт прибираємо так як його роль вже зіграв
                "som".
                <br />
                <StyledRuleExample>
                    Ще приклад: "Jeg har en venn <span>som</span> jeg ofte
                    prater <span>med</span>" - "У мене є дург{" "}
                    <span>з яким</span> я часто говорю".
                </StyledRuleExample>{" "}
                Зверніть увагу що ми говоримо "з яким" а норведці кажуть "яким
                <span> ...</span> з".
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Норвежці часто
                говорять швидко і можуть зовсім пропустити "som".{" "}
                <StyledRuleExample>
                    "Jeg har en venn jeg ofte prater med".
                </StyledRuleExample>
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleLeddsetning;
