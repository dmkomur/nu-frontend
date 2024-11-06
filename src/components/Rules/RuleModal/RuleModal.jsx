import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";
const RuleModal = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Модальне дієслово (Modal verb)</StyledRuleHeader>
            <StyledRuleDescription>
                Модальне дієслово вказує на можливість, здатність або намір
                виконати якусь дію. Завжди використовується у зв'язці з іншим
                дієсловом і зовсім небагато змінює граматику - як і завжди друге
                дієслово використовується в інфінітиві, але опускається частка
                "å".{" "}
                <StyledRuleExample>
                    Наприклад: "Du må lære norsk" ("Ти повинен вивчати
                    норвезьку").
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Kan</span> - бути здатним, вміти.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Han kan synge" ("Він може співати").
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Må</span> - повинен, зобов'язаний.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Må du gå på jobb i morgen?" ("Ти маєш іти на
                    роботу завтра?").
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Vil</span> - хотіти, виявити бажання.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Jeg vil kjøpe is" ("Я хочу купити морозиво").
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Bør</span> - наполеглива рекомендація, краще б зробити.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Du bør slutte å røyke" ("Тобі слід кинути
                    палити"). Зверніть увагу на зв'язку з{" "}
                    <span>трьох дієслів</span> у цьому прикладі. Після
                    звичайного дієслова ставиться дієслів в інфініті та частка
                    <span> "å"</span> на місці.
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Skal</span> - план зробити щось, буду, майбутній час.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Dere skal leie leilighet neste år" ("Ви будете
                    орендувати квартиру в наступному році").
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Для <span>заперечення</span> достатньо поставити слово "
                <span>ikke</span>" після модального дієслова.
                <StyledRuleExample>
                    {" "}
                    Наприклад: "Grisen kan ikke svømme" ("Свиня не вміє
                    плавати").
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Якщо після
                модального дієслова стоїть дієслово пов'язане з рухом (йти,
                їхати), його можна опустити.{" "}
                <StyledRuleExample>
                    Наприклад: "Jeg skal hjem" ("Я їхатиму додому").
                </StyledRuleExample>
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleModal;
