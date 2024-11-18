/* eslint-disable react/no-unescaped-entities */
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
            <StyledRuleHeader>Підрядне речення (Leddsetning)</StyledRuleHeader>
            <StyledRuleDescription>
                У граматиці це означає <span>залежне речення</span>, яке не може
                існувати окремо і додає додаткову інформацію до головного
                речення. Підрядні речення можуть вводитися сполучниками та
                виконують різні функції, такі як визначення, пояснення, вказівка
                на час, причину тощо.
                <br />Є один важливий момент який стосується всіх видів
                підрядних реченнь - слова (adverbial) &quot;ikke&quot; (не),
                &quot;alltid&quot; (&quot;завжди&quot;), &quot;ofte&quot;
                (&quot;часто&quot;) і &quot;aldri&quot; (ніколи) ставляться
                перед дієсловом!{" "}
                <StyledRuleExample>
                    &quot;Jeg sa at jeg <span>ikke</span> liker lakris&quot; -
                    &quot;Я сказав що мені не подобається лакриця&quot;.
                </StyledRuleExample>
            </StyledRuleDescription>

            <StyledRuleDescription>
                Підрядні речення зі сполучниками <span>At</span> (Що) та{" "}
                <span>Om </span>(Чи). <br />
                Основна частина речення як завжди будується за принципом{" "}
                <span>SVO</span>, підрядна частина починається з сполучника{" "}
                <span>At</span> або <span>Om </span> але вважається що сполучник
                займає &quot;нульову&quot; позицію, далі речення будується за
                загальним принципом із дієсловом на другому місці.
                <br />
                <StyledRuleExample>
                    Наприклад: &quot;Jeg sier{" "}
                    <span>at jeg ikke liker høsten</span>&quot; - &quot;Я кажу,{" "}
                    <span>що</span> я не люблю осінь&quot;.
                </StyledRuleExample>
                <br />
                Як видно у прикладі, друга (підрядна) частина речення не здатна
                бути самостійною і звучить дивно - &quot;
                <span>at jeg liker høsten</span>&quot; - &quot;що я люблю
                осінь&quot;.
                <br />
                <StyledRuleExample>
                    Приклад: &quot;Hun spør
                    <span> om det var godt i hytta</span>&quot; - &quot;Вона
                    запитує, <span>чи</span> добре було в хатині&quot;.
                </StyledRuleExample>
                <br />З сполучникам &quot;Om&quot; ситуація така сама, для
                зручності розуміння можна його перекласти як &quot;про те&quot;.
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Часто нам потрібно
                поміняти займенник у підрядній частині речення.{" "}
                <StyledRuleExample>
                    Наприклад: &quot;Mark sier: <span>Jeg</span> liker å
                    fiske&quot; - &quot;Марк каже: <span>Я</span> люблю
                    рибалити&quot; = &quot;Han sier at <span>han</span> liker å
                    fiske&quot; - &quot;Він каже що <span>він</span> любить
                    рибалити&quot;.
                </StyledRuleExample>
            </StyledAlert>
            <StyledRuleDescription>
                Підрядні речення із запитальними словами утворюються дуже просто
                - основна частина речення як завжди будується за принципом{" "}
                <span>SVO</span>, підрядна частина починається з запитального
                слова, яке займає нульову позицію, а далі підрядна частина теж в
                порядку <span>SVO</span>.
                <br />
                <span>Hva</span> - що.{" "}
                <StyledRuleExample>
                    Приклад: &quot;Han spør <span>hva gjør hun</span>&quot; -
                    &quot;Він запитує, <span>що вона робить</span>&quot;.
                </StyledRuleExample>
                <br />
                <span>Hvem</span> - що.{" "}
                <StyledRuleExample>
                    Приклад: &quot;Han spør <span>hvem hun ringer til</span>
                    &quot; - &quot;Він запитує, <span>кому вона дзвонить</span>
                    &quot;.
                </StyledRuleExample>
                <br />
                <span>Hvor</span> - куди.{" "}
                <StyledRuleExample>
                    Приклад: &quot;Han vet ikke <span>hvor hun drar</span>&quot;
                    - &quot;Він не знає, <span>куди вона їде</span>&quot;.
                </StyledRuleExample>
                <br />
                <span>Hvorfor</span> - чому.{" "}
                <StyledRuleExample>
                    Приклад: &quot;Han lurer på
                    <span> hvorfor hun er sykmeldt</span>&quot; - &quot;Він
                    дивується,
                    <span> чому вона на лікарняному</span>&quot;.
                </StyledRuleExample>
                <br />
                <span>Hvordan</span> - як.{" "}
                <StyledRuleExample>
                    Приклад: &quot;Han sier
                    <span> hvordan hun skal øve</span>&quot; - &quot;Він
                    розповідає,
                    <span> як вона буде тренуватися</span>&quot;.
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Підрядні речення зі сполучниками <span>Da</span> (Тоді/Тоді як)
                та <span>Når </span>(Коли). <br />
                Загалом можна сказати, що обидва варіанти і &quot;Da&quot; і
                &quot;Når&quot; можна перекласти як &quot;Коли&quot;, але перший
                використовується для минулого, а другий для майбутнього і
                теперішнього, але щоб уникнути плутанини краще запам'ятати їх як
                &quot;Тоді&quot; і &quot;Коли&quot;.
                <br />
                Cтруктура речення залежить від того де знаходиться підрядна
                частина. <br />У випадках коли підрядна частина йде другою,
                структура основної буде класична <span>SVO</span>.
                <br />
                <StyledRuleExample>
                    Наприклад: &quot;<span>Barna blir alltid begeistret</span>{" "}
                    når de får is&quot; - &quot;
                    <span>Діти завжди в захваті</span>, коли вони отримують
                    морозиво&quot;.
                </StyledRuleExample>
                <br />
                Коли ж підрядна частина йде першою, структура основної буде
                <span> VSO</span>, тобто починатися з дієслова.
                <br />
                <StyledRuleExample>
                    Наприклад: &quot;Da jeg var liten,{" "}
                    <span>bodde jeg i Ukraina</span>&quot; - &quot;Тоді як я був
                    маленьким, <spanm>жив я в Україні</spanm>&quot;.
                </StyledRuleExample>
                <br />
                <span>Da</span> використовується в підрядній частині та описує
                минуле.
                <br />
                <StyledRuleExample>
                    Наприклад: &quot;Hun bodde i Spania <span>da</span> hun var
                    liten&quot; - &quot;Вона жила в Іспанії<span> тоді як</span>{" "}
                    вона була маленька&quot;.
                </StyledRuleExample>
                <br />
                <span>Når </span> використовується для опису майбутнього та
                регулярних дій.
                <br />
                <StyledRuleExample>
                    Наприклад: &quot;<span>Når</span> jeg blir gammel, skal jeg
                    flytte til Tunisia&quot; - &quot;<span>Коли</span> я стану
                    старим, переїду я до Тунісу&quot;.
                </StyledRuleExample>
                <br />
                <StyledRuleExample>
                    Приклад: &quot;<span>Når</span> jeg går på skolen, lærer jeg
                    mange nye ord&quot; - &quot;<span>Коли</span> я ходжу до
                    школи, вивчаю я багато нових слів&quot;.
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Підрядні речення зі сполучником <span>Som</span>. <br />
                Загалом сполучником &quot;Som&quot; з'єднує два речення в одне,
                і в підрядній частині виконує функції суб'єкта або об'єкта.
                <br />
                <span>Som</span> - як, який, яка, які, яким, з яким, якого...
                &quot;Som&quot; - це швейцарський ніж. <br />
                Основна частина речення будується стандартно - <span>SVO</span>,
                з підрядною будем розбиратись на прикладах.
                <br />
                Припустим ми хочемо скласти з двох речень одне -{" "}
                <StyledRuleExample>
                    &quot;Я маю друга&quot;
                </StyledRuleExample>{" "}
                та{" "}
                <StyledRuleExample>
                    &quot;Він живе в Осло&quot;
                </StyledRuleExample>
                . Українською ми скажем приблизно так -{" "}
                <StyledRuleExample>
                    &quot;Я маю друга, який живе в Осло&quot;
                </StyledRuleExample>
                . Теж саме нам потрібно реалізувати норвежською.
                <br />
                Основана частина -
                <StyledRuleExample>
                    {" "}
                    &quot;Jeg har en venn&quot;
                </StyledRuleExample>
                , підрядна -{" "}
                <StyledRuleExample>
                    &quot;<span>som</span> bor i Oslo&quot;.
                </StyledRuleExample>{" "}
                У нашому прикладі &quot;som&quot; виконує роль{" "}
                <span>суб'єкта</span> і дієслово cтоїть відразу за ним -{" "}
                <StyledRuleExample>
                    &quot;Jeg har en venn som bor i Oslo&quot;.
                </StyledRuleExample>
                <br />
                Тепер складемо інші речення в одне.{" "}
                <StyledRuleExample>
                    &quot;Ми будемо дивитися фільм&quot;
                </StyledRuleExample>{" "}
                та{" "}
                <StyledRuleExample>
                    &quot;Я бачив фільм раніше&quot;
                </StyledRuleExample>
                . В нас вийде -{" "}
                <StyledRuleExample>
                    &quot;Ми будемо дивитися фільм <span>який</span> я бачив
                    раніше&quot;.
                </StyledRuleExample>{" "}
                Норвезькую буде так -{" "}
                <StyledRuleExample>
                    Vi skal se en film <span>som</span> jeg har sett før
                </StyledRuleExample>
                . В підрядній частині &quot;som&quot; виконує роль{" "}
                <span>об'єкта</span>, cуб'єктом є &quot;jeg&quot; (я) - той хто
                виконую дію в підрядній частині. Таким чином після
                &quot;som&quot; ми ставимо суб'єкт і дієслово <span>SV</span>, а
                об'єкт прибираємо так як його роль вже зіграв &quot;som&quot;.
                <br />
                <StyledRuleExample>
                    Ще приклад: &quot;Jeg har en venn <span>som</span> jeg ofte
                    prater <span>med</span>&quot; - &quot;У мене є дург{" "}
                    <span>з яким</span> я часто говорю&quot;.
                </StyledRuleExample>{" "}
                Зверніть увагу що ми говоримо &quot;з яким&quot; а норвежці
                кажуть &quot;яким
                <span> ...</span> з&quot;.
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Норвежці часто
                говорять швидко і можуть зовсім пропустити &quot;som&quot;.{" "}
                <StyledRuleExample>
                    &quot;Jeg har en venn jeg ofte prater med&quot;.
                </StyledRuleExample>
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleLeddsetning;
