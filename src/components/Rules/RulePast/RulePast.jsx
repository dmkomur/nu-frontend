import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RulePast = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Минулий час (Fortid)</StyledRuleHeader>
            <StyledRuleDescription>
                Минулий час у норвезькій мові формується завдяки використанню
                дієслова в минулому часі. Також у реченні може безпосередньо
                зазначатись що дія відбулася в минулому.
                <br />
                Дієслова бувають двох типів: <span>сильні (sterke)</span> – ті,
                що змінюються за індивідуальним принципом, і{" "}
                <span>слабкі (svake)</span> – ті, які змінюються за загальними
                правилами.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Сильні (Sterke)</span>
                <br />
                <span>Å være - var</span> - Бути - був.
                <br />
                <span>Å gå - gikk</span> - Ходити – ходив.
                <br />
                <span>Å Bli - ble</span> - Ставати – став.
                <br />
                <span>Å se - så</span> - Дивитись - подивився.
                <br />
                <span>Å si - sa</span> - Сказати – сказав.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>Слабкі (Svake)</span> мають кілька видів закінчень:{" "}
                <span>-et, -te, -dde</span>
                <br />
                <span>Å snakke - snakket</span> - Говорити – говорив.
                <br />
                <span>Å huske - husket</span> - Пам'ятати - пам'ятав.
                <br />
                <span>Å lese - leste</span> - Читати - читав.
                <br />
                <span>Å lære - lærte</span> - Вчити – вчив.
                <br />
                <span>Å bo - bodde</span> - Жити - жив.
                <br />
                <span>Å ha - hadde</span> - Мати - мав.
            </StyledRuleDescription>
            <StyledAlert>
                Дієслів дуже багато і їх дуже важливо вчити, притому вчити
                бажано відразу всі форми: інфінітив - теперішній час - минулий
                час - теперішній здійснене.
                <i> å spille - spiller - spilte - har spilt</i>.
            </StyledAlert>
            <StyledRuleDescription>
                В минулому часі ми знаємо або розуміємо, що дія відбувалася в
                минулому. Нижче приклади з вказниками часу, зверніть увагу на
                те, що дієслово як завжди на другому місці.
                <br />
                <span>I går var jeg på skolen</span> - Вчора я був у школі.
                <br />
                <span>For to dager siden dro jeg til Oslo</span> - Два дні тому
                їздив я до Осло.
                <br />
                <span>Jeg bodde i et vakkert hus i fjor</span> - Я жив у гарному
                будинку минулого року.
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RulePast;
