import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RulePossessive = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>
                Присвійні прикметники (Possessiver)
            </StyledRuleHeader>
            <StyledRuleDescription>
                Присвійні прикметники відповідають на питання чий? чия? чиє?
                чиї?, тому що вказують на приналежність особі або тварині.{" "}
                <StyledRuleExample>
                    "Jeg liker sykkelen <span>min</span>" - "Я люблю{" "}
                    <span>свій (мій)</span> велосипед".
                </StyledRuleExample>
                <br />
                Зверніть увагу що в нашій мові ми можемо практично завжди казати
                "свій", в норвезькій мові так робити не можна і треба казати
                "любиш твій", "люблю мій" ... , "свій" використеться лише для
                третьої особи - їх, її, його.
            </StyledRuleDescription>
            <StyledRuleDescription>
                (Jeg)<span> min - mi - mitt - mine</span> - мій - моя - моє -
                мої.
                <br />
                (Du)<span> din - di - ditt - dine</span> - твій - твоя - твоє -
                твої.
                <br />
                (Han)
                <span> hans - hans - hans - hans</span> - його - його - його -
                його.
                <br />
                (Hun)<span> hennes - hennes - hennes - hennes</span> - її - її -
                її - її.
                <br />
                (Vi)<span> vår - vår - vårt - våre</span> - нашого - нашу - наше
                - наших.
                <br />
                (Dere)
                <span> deres - deres - deres - deres</span> - вашого - вашого -
                вашого - ваших.
                <br />
                (De)
                <span> deres - deres - deres - deres</span>
                - їх - їх - їх - їх.
                <br />
            </StyledRuleDescription>
            <StyledRuleDescription>
                Тільки він - вона - воно - вони можуть "любити" свого - свою -
                своє - своїх.
                <br />
                <span> Sin - si - sitt - sine</span> - свого - свою - своє -
                своїх.
                <br />
                <StyledRuleExample>
                    Приклад: "De elsker datteren <span>sin</span> og sønnen{" "}
                    <span>vår</span>" - "Вони люблять <span>свою</span> доньку і{" "}
                    <span>нашого </span>
                    сина".
                </StyledRuleExample>
                <br />
                <StyledRuleExample>
                    Приклад: "Hun elsker mannen <span>sin</span> og mannen{" "}
                    <span>hennes</span>" - "Вона любить <span>свого</span>{" "}
                    чоловіка та <span>її</span> чоловіка".
                </StyledRuleExample>
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RulePossessive;
