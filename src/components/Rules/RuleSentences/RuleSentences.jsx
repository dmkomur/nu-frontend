import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";

const RuleSentences = () => {
    return (
        <>
            <StyledRuleHeader>Будова речення</StyledRuleHeader>
            <StyledRuleDescription>
                В норвезькій мові речення будуються за принципом{" "}
                <span>SVO</span>. <span>"S"</span> – суб'єкт, <span>"V"</span> –
                дієслово, <span>"O"</span> – об'єкт.{" "}
                <i>Наприклад: "Jeg liker vann" ("Я люблю воду")</i>.
                <br />
                <span>"S" - суб'єкт</span> – те чи той хто робить дію. У нашій
                мові ми можемо обійтися без суб'єкта <i>("Йде дощ")</i>, але в
                норвезькій мові так робити не можна, тому часто використовується
                підмет <span>"Det"</span> як суб'єкт.{" "}
                <i> Наприклад: "Det er kaldt i dag" ("Холодно сьогодні")</i>{" "}
                Суб'єкт це як сам виконавець так і слова що описують його.
                <i> Наприклад: "Hvit halt hest" ("Білий кульгавий кінь")</i> .
                <br />
                <span>"V" - дієслово</span> - дія яка відбувається.{" "}
                <i>Наприклад: "Liker" ("Подобається")</i>. Без дієслова речення
                не буває. Ми часто опускаємо дієслово <span>"бути"</span> в
                нашій мові, в норвезькій мові він обов'язковий.{" "}
                <i>Наприклад: "Hun er smart" ("Вона є розумна")</i>.
                <br />
                <span>"O" - об'єкт</span> - доповнення, тобто те/той, щодо кого
                відбувається дія.
                <i>
                    {" "}
                    Наприклад: "Jeg liker å lære norsk" ("Мені подобається
                    вивчати норвезьку мову")
                </i>{" "}
                . "Norsk" ("Норвезьку мову") - це і є об'єкт у нашому реченні.
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>У норвезькій мові
                дієслово
                <span> завжди стоїть на другому місці</span> у структурі
                речення. Винятком є ​​питальні речення на які можна відповісти
                ТАК або НІ, у таких випадках речення будуються за принципом{" "}
                <span>VSO</span> -{" "}
                <i>наприклад: "Liker du vann?" ("Чи любиш ти воду?")</i>. Так
                само є й інші винятки, але їх дуже мало і пов'язані вони з
                конкретними словами. З ними ви зможете познайомитись у
                подальшому вивченні мови.
            </StyledAlert>
        </>
    );
};
export default RuleSentences;
