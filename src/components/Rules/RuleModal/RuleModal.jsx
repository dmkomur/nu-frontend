import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

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
                <i>
                    Наприклад: "Du må lære norsk" ("Ти повинен вивчати
                    норвезьку").
                </i>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Kan</span> - бути здатним, вміти.
                <i> Наприклад: "Han kan synge" ("Він може співати").</i>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Må</span> - повинен, зобов'язаний.
                <i>
                    {" "}
                    Наприклад: "Må du gå på jobb i morgen?" ("Ти маєш іти на
                    роботу завтра?").
                </i>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Vil</span> - хотіти, виявити бажання.
                <i>
                    {" "}
                    Наприклад: "Jeg vil kjøpe is" ("Я хочу купити морозиво").
                </i>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Bør</span> - наполеглива рекомендація, краще б зробити.
                <i>
                    {" "}
                    Наприклад: "Du bør slutte å røyke" ("Тобі слід кинути
                    палити"). Зверніть увагу на зв'язку з{" "}
                    <span>трьох дієслів</span> у цьому прикладі. Після
                    звичайного дієслова ставиться дієслів в інфініті та частка
                    <span> "å"</span> на місці.
                </i>
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Skal</span> - план зробити щось, майбутній час.
                <i>
                    {" "}
                    Наприклад: "Dere skal leie leilighet neste år" ("Ви будете
                    орендувати квартиру в наступному році").
                </i>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Для <span>заперечення</span> достатньо поставити слово "
                <span>ikke</span>" після модального дієслова.
                <i>
                    {" "}
                    Наприклад: "Grisen kan ikke svømme" ("Свиня не вміє
                    плавати").
                </i>
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Якщо після
                модального дієслова стоїть дієслово пов'язане з рухом (йти,
                їхати), його можна опустити.{" "}
                <i>Наприклад: "Jeg skal hjem" ("Я їхатиму додому").</i>
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleModal;
