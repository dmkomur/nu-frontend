import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RuleLocation = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Розташування (Plassering)</StyledRuleHeader>
            <StyledRuleDescription>
                Для вказівки розташування в норвезькій мові використовуються
                прийменники.
            </StyledRuleDescription>
            <StyledRuleDescription>
                <span>I/Inne</span> - В/В середині.{" "}
                <StyledRuleExample>
                    Приклад: "Eple ligger i en boks" ("Яблуко лежить у
                    коробці").
                </StyledRuleExample>
                <br />
                <span>Ute</span> - Зовні.{" "}
                <StyledRuleExample>
                    Приклад: "Barna leker ute" ("Діти грають на вулиці").
                </StyledRuleExample>
                <br />
                <span>På</span> - На.{" "}
                <StyledRuleExample>
                    Приклад: "Bok på bordet" ("Книжка на столі").
                </StyledRuleExample>
                <br />
                <span>Ved siden av</span> - Поруч з (дуже близько - як яйця в
                лотку).{" "}
                <StyledRuleExample>
                    Приклад: "Melk og agurk ved siden av toalettpapir" ("Молоко
                    та огірки поруч із туалетним папером").
                </StyledRuleExample>
                <br />
                <span>Under</span> - Під.{" "}
                <StyledRuleExample>
                    Приклад: "Sokk under sengen" ("Шкарпетка під ліжком").
                </StyledRuleExample>
                <br />
                <span>Over</span> - Над.{" "}
                <StyledRuleExample>
                    Приклад: "Hekker over vinduet" ("Гніздо над вікном").
                </StyledRuleExample>
                <br />
                <span>Rund</span> - Навколо.{" "}
                <StyledRuleExample>
                    Приклад: "Kvinner går rundt ham" ("Навколо нього ходять
                    жінки").
                </StyledRuleExample>
                <br />
                <span>Næar</span> - Біля/Неподалеку.{" "}
                <StyledRuleExample>
                    Приклад: "Skolen ligger nær huset mitt" ("Школа біля мого
                    дому").
                </StyledRuleExample>
                <br />
                <span>Mellom</span> - Між.{" "}
                <StyledRuleExample>
                    Приклад: "Banan mellom kiwi" ("Банан між ківі").
                </StyledRuleExample>
                <br />
                <span>Foran</span> - Перед.{" "}
                <StyledRuleExample>
                    Приклад: "Katten sitter foran TV" ("Кіт сидить перед
                    телевізором").
                </StyledRuleExample>
                <br />
                <span>Her</span> - Тут.{" "}
                <StyledRuleExample>
                    Приклад: "Det er her" ("Воно тут").
                </StyledRuleExample>
                <br />
                <span>Der</span> - Там.{" "}
                <StyledRuleExample>
                    Приклад: "Det er der" ("Воно там").
                </StyledRuleExample>
                <br />
            </StyledRuleDescription>
            <StyledRuleDescription>
                Дієслова, що вказують на стан, плюс мінус, такі ж як у нас.
                <br />
                <span>Et glass står på bordet</span> - Склянка стоїть на столі.
                <br />
                <span>Boken ligger på sengen</span> - Книжка лежить на ліжку.
                <br />
                <span>Bildet henger på veggen</span> - Картина висить на стіні.
                <br />
                Варто звернути увагу лише на цей приклад:
                <br />
                <span>Sett melken i kjøleskapet</span> - Постав (Встанови)
                молоко в холодильник.
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Іноді логіка не
                така, як у нас, і доводиться просто запам'ятовувати.{" "}
                <StyledRuleExample>
                    Приклад: "Han sitter <span>i</span> sofaen" ("Він сидить на
                    дивані").
                </StyledRuleExample>{" "}
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleLocation;
