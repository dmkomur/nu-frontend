import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RuleSentences = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Будова речення (Setninger)</StyledRuleHeader>
            <StyledRuleDescription>
                В норвезькій мові речення будуються за принципом{" "}
                <span>SVO</span>. <span>"S"</span> – суб'єкт, <span>"V"</span> –
                дієслово, <span>"O"</span> – об'єкт.{" "}
                <StyledRuleExample>
                    Наприклад: "Jeg liker vann" ("Я люблю воду")
                </StyledRuleExample>
                .
                <br />
                Суб'єкт та дієслово обов'язково повинні бути в усіх реченнях!
                <br />
                <span>"S" - суб'єкт</span> – те чи той хто робить дію. У нашій
                мові ми можемо обійтися без суб'єкта <i>("Йде дощ")</i>, але в
                норвезькій мові так робити не можна, тому часто використовується
                підмет <span>"Det"</span> як суб'єкт.{" "}
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Det er kaldt i dag" ("Холодно сьогодні")
                </StyledRuleExample>{" "}
                Суб'єкт це як сам виконавець так і слова що описують його.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Hvit halt hest" ("Білий кульгавий кінь")
                </StyledRuleExample>
                .
                <br />
                <span>"V" - дієслово</span> - дія яка відбувається.{" "}
                <StyledRuleExample>
                    Наприклад: "Liker" ("Подобається")
                </StyledRuleExample>
                . Без дієслова речення не буває. Ми часто опускаємо дієслово{" "}
                <span>"бути"</span> в нашій мові, в норвезькій мові віно
                обов'язкове.{" "}
                <StyledRuleExample>
                    Наприклад: "Hun er smart" ("Вона є розумна")
                </StyledRuleExample>
                .
                <br />
                <span>"O" - об'єкт</span> - доповнення, тобто те/той, щодо кого
                відбувається дія.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Jeg liker å lære norsk" ("Мені подобається
                    вивчати норвезьку мову")
                </StyledRuleExample>{" "}
                . "Norsk" ("Норвезьку мову") - це і є об'єкт у нашому реченні.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Якщо нам потрібно поставити показник часу або вказати місцу або
                якусь іншу інформацію <span>(adverbial)</span> на перше місце в
                реченні, то <span>дієслово</span> все одно залишається на{" "}
                <span>першому місці</span>, а суб'єк буде розташований за ним.
                <br />
                <StyledRuleExample>
                    Наприклад: "Nå <span>ser</span> jeg på TV" ("Зараз дивлюсь{" "}
                    <span>я</span> тв")
                </StyledRuleExample>
                .
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>У норвезькій мові
                дієслово
                <span> завжди стоїть на другому місці</span> у структурі
                речення. Винятком є ​​питальні речення на які можна відповісти
                ТАК або НІ, у таких випадках речення будуються за принципом{" "}
                <span>VSO</span> -{" "}
                <StyledRuleExample>
                    наприклад: "Liker du vann?" ("Чи любиш ти воду?")
                </StyledRuleExample>
                . Так само є й інші винятки, але їх дуже мало і пов'язані вони з
                конкретними словами. З ними ви зможете познайомитись у
                подальшому вивченні мови.
            </StyledAlert>
            <StyledRuleDescription>
                <span>Og </span>(І/Та), <span>Men </span>(Але) – ці два{" "}
                <span>сполучника</span>
                використовуються для поєднання двох речень в одне, при цьому
                вони не належать ні до першої частини речення ні до другої.
                Тобто займають "нульову" позицію, дієслово як завжди залишається
                на другому місці, суб'єкт чи додаткові слова займуть перше
                місце.
                <br />
                <StyledRuleExample>
                    "Jeg drikker vann" ("Я п'ю воду") + "Jeg spiser pizza" ("Я
                    їм піцу") = "Jeg drikker vann <span>og</span> jeg spiser
                    pizza".
                </StyledRuleExample>{" "}
                <br />
                <StyledRuleExample>
                    "Jeg liker kaffe" ("Я люблю каву") + "Nå drikker jeg te"
                    ("Зараз я п'ю чай") = "Jeg liker kaffe <span>men</span> nå
                    drikker jeg te".
                </StyledRuleExample>{" "}
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RuleSentences;
