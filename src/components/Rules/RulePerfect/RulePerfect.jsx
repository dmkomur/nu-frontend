import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RulePerfect = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>
                Теперішній завершений час (Presens perfektum)
            </StyledRuleHeader>
            <StyledRuleDescription>
                Теперішній завершений час вказує на{" "}
                <span>результат виконання</span> якоїсь дії. Є велика різниця
                між двома реченнями: "Я їв суп вчора" та "Я з'їв суп" - "Jeg
                spiste suppe i går" og "Jeg har spist suppe". У нашій мові
                обидва речення в минулому часі, але в норвезькій друге речення
                це <span>Presens perfektum</span>, тому що нам важливо не коли
                відбулася подія, а сам результат. Тобто, "Я з'їв суп" = "Я не
                голодний", я маю результат того що я зробив. Зверніть увагу, що
                <span> Presens perfektum</span> має обов'язково два дієслова -
                перше - <span>"har"</span> ("маю", мається на увазі результат),
                а друге це вже будь-яке дієслово результат виконання якого нас
                цiкавить (в прикладі був "spist" - спеціальна форма дієслова "å
                spise" для Presens perfektum).
            </StyledRuleDescription>
            <StyledRuleDescription>
                Сподіваюся наведені нижче приклади допоможуть розібратися.
                <br />
                <StyledRuleExample>
                    "Jeg <span>har gjort</span> oppgavene" - "Я виконав
                    завдання" (Мається на увазі, що я тепер вільний).
                    <br />
                    "Jeg <span>har spist</span> middag" - "Я з’їв вечерю"
                    (Результат - я ситий).
                    <br />
                    "Jeg <span>har fått</span> jobb" - "Я отримав роботу"
                    (Більше не безробітний).
                </StyledRuleExample>
                <br />
                Заперечення утворюється шляхом додавання "ikke" після "har".
                <br />
                <StyledRuleExample>
                    "Jeg <span>har ikke spist</span> frokost" - "Я не поснідав".
                </StyledRuleExample>
                <br />
                Не забувайте про <span>adverbial</span>: "aldri", "altid" які
                люблять влізти поміж дієсловами.
                <br />
                <StyledRuleExample>
                    "Jeg <span>har aldri vært</span> i Paris" - "Я ніколи не був
                    у Парижі".
                </StyledRuleExample>
                <br />
                Запитальне речення будується шляхом пересування дієслова "har"
                на перше місце а далі все просто "<span>SVO</span>".
                <br />
                <StyledRuleExample>
                    "<span>Har</span> du vært i Oslo?" - "Ти був у Осло?".
                </StyledRuleExample>
            </StyledRuleDescription>

            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Зверніть увагу, що
                Presens perfektum речення відповідають на питання "
                <span>що трапилось</span>" а не на питання "
                <span>коли трапилось</span>", це простий спосіб відрізняти їх
                від простого минулого часу. Якщо вказано час - це минелу, якщо
                ні - перфектум.
            </StyledAlert>
            <StyledRuleDescription>
                Також важливий прийом це коли ми розповідаємо,{" "}
                <span>як довго щось відбувається</span> і досі{" "}
                <span>не закінчилось</span>.
                <br />
                <StyledRuleExample>
                    "Jeg har bodd her i to år" - "Я проживаю тут два роки".
                </StyledRuleExample>
                <br />
                Дуже важливо розуміти, що речення відповідає на питання "
                <span>як довго</span>" і досі дія <span>триває</span>!
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};
export default RulePerfect;
