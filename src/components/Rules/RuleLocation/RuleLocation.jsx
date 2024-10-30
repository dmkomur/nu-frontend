import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RuleLocation = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Розташування (Plassering)</StyledRuleHeader>
            <StyledRuleDescription>
                Для вказівки розташування в норвезькій мові використовуються
                прийменники.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>I/Inne</span> - В.{" "}
                <i>
                    Приклад: "Eple ligger i en boks" ("Яблуко лежить у
                    коробці").
                </i>
                <br />
                <span>På</span> - На.{" "}
                <i>Приклад: "Bok på bordet" ("Книжка на столі").</i>
                <br />
                <span>Ved siden av</span> - Поруч з. (дуже близько - як яйця в
                лотку){" "}
                <i>
                    Приклад: "Melk og agurk ved siden av toalettpapir" ("Молоко
                    та огірки поруч із туалетним папером").
                </i>
                <br />
                <span>Under</span> - Під.{" "}
                <i>Приклад: "Sokk under sengen" ("Шкарпетка під ліжком").</i>
                <br />
                <span>Over</span> - Над.{" "}
                <i>Приклад: "Hekker over vinduet" ("Гніздо над вікном").</i>
                <br />
                <span>Rund</span> - Навколо.{" "}
                <i>
                    Приклад: "Kvinner går rundt ham" ("Навколо нього ходять
                    жінки").
                </i>
                <br />
                <span>Næar</span> - Біля/Неподалеку.{" "}
                <i>
                    Приклад: "Skolen ligger nær huset mitt" ("Школа біля мого
                    дому").
                </i>
                <br />
                <span>Mellom</span> - Між.{" "}
                <i>Приклад: "Banan mellom kiwi" ("Банан між ківі").</i>
                <br />
                <span>Foran</span> - Перед.{" "}
                <i>
                    Приклад: "Katten sitter foran TV" ("Кіт сидить перед
                    телевізором").
                </i>
                <br />
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Іноді логіка не
                така, як у нас, і доводиться просто запам'ятовувати. З
                напрямками ситуація схожа.
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleLocation;
