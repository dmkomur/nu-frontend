import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RuleImperative = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>
                Наказова форму дієслова (Verb: imperativ)
            </StyledRuleHeader>
            <StyledRuleDescription>
                Наказова форму дієслова вказує на волевиявлення i спонукає до
                дії.{" "}
                <StyledRuleExample>
                    {" "}
                    Наприклад: "йди!", "їж!", "сiдайте!"
                </StyledRuleExample>
                .
            </StyledRuleDescription>
            <StyledRuleDescription>
                Щоб утворити наказову форму дієслова, потрібно просто усунути
                закінчення <span>"e"</span> в початковій формі дієслова:
                <br />
                <span>Ikke spis denne soppen!</span> - Не їж цей гриб!
                <br />
                <span>Vova, vær normal!</span> - Вова, будь нормальний!
                <br />
                <span>Sitt ved siden av meg!</span> - Сідай поряд зі мною!
                <br />
                <span>Paraska, løp etter bussen!</span> - Параско, біжи за
                автобусом!
                <br />
                <span>Stopp flyet, jeg må av!</span> - Зупиніть літак, мені
                потрібно вийти!
            </StyledRuleDescription>
            <StyledRuleDescription>
                Якщо ж дієслово закінчується на будь-яку іншу голосну,{" "}
                <span>крім "e"</span>, то ми просто залишаємо дієслово в
                початковій формі.
                <br />
                <span>Gå hjem!</span> - Іди додому!
                <br />
                <span>Bli med meg!</span> - Ходімо зі мною!{" "}
                <StyledRuleExample>
                    Дієслово "Bli" перекладається як "ставати", але в основному
                    передбачає зміну стану і переміщення, і використовується для
                    розташування в майбутньому.
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Так як наказова
                форма часто застосовується безпосередньо до співрозмовника то
                іменник можна опустити.
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleImperative;
