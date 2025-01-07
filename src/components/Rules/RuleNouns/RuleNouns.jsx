import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";
import StyledRuleExample from "../../common/rules/RuleExample.styled";

const RuleNouns = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Іменник (Substantive)</StyledRuleHeader>
            <StyledRuleDescription>
                Іменники в норвезькій мові дещо складніші ніж у нас. Вони
                бувають в двох формах - в <span>неозначеній</span> та{" "}
                <span>означенній</span>.{" "}
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Для ідентифікації
                означеної чи неозначеної форми в однині використовується
                <span> артикль</span>. В нашій мові ми його не використовуємо
                тому це дещо складно для розуміння але з часом ви почнете їх
                використовувати непомітно для себе.
            </StyledAlert>
            <StyledRuleDescription>
                В неозначеній формі ми вперше щось розповідаємо про іменник або
                це не є важливим.{" "}
                <StyledRuleExample>
                    Наприклад: "Hun kjøpte <span>et eple</span>".
                </StyledRuleExample>{" "}
                Як бачите в цьому випадку вона купила якесь яблуко.{" "}
                <StyledRuleExample>
                    Артикль <span>et</span> стоїть перед іменником і вказує на
                    неозначену форму.
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                В означенній формі нам або вже щось відомо про іменник або це
                зрозуміло з контексту.{" "}
                <StyledRuleExample>
                    Наприклад: "Hun skar <span>eplet</span> i tynne skiver"
                </StyledRuleExample>
                . Тут вже вона нарізала яблуко про яке ми вже щось знаємо - вона
                його купила в попередньому прикладі.{" "}
                <StyledRuleExample>
                    Артикль забирається перед іменником та додається до його
                    закінчення: "apl<span>et</span>", таким чином ми вказуємо на
                    означну форму іменника.
                </StyledRuleExample>
            </StyledRuleDescription>

            <StyledRuleDescription>
                <span>Артикль</span> вказує не лише на означену чи неозначену
                форму але і вказує рід іменника!
                <br />
                <span>Однина неозначена форма:</span>
                <br />
                <span>En</span> - чоловій рід. <i>Приклад: "en hund" ("пес")</i>
                .
                <br />
                <span>Ei</span> - жіночій рід.{" "}
                <StyledRuleExample>
                    Приклад: "ei lampe" ("лампа")
                </StyledRuleExample>
                .
                <br />
                <span>Et</span> - середній рід.{" "}
                <StyledRuleExample>
                    Приклад: "et eple" ("яблуко")
                </StyledRuleExample>
                .
                <br />
                <span>Однина означена форма:</span>
                <br />
                Hund<span>en</span> - чоловій рід.{" "}
                <StyledRuleExample>
                    Артикль пересувається до закінчення іменника.
                </StyledRuleExample>
                <br />
                Lamp<span>a</span> - жіночій рід.{" "}
                <StyledRuleExample>
                    Артикль прибирається але додається лише закінчення{" "}
                    <span>a</span>.
                </StyledRuleExample>
                <br />
                Epl<span>et</span> - середній рід.{" "}
                <StyledRuleExample>
                    Артикль пересувається до закінчення іменнику.
                </StyledRuleExample>
            </StyledRuleDescription>

            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>В норвезькій мові
                нема жодної логіки щодо вивчення родів іменників, але приблизно
                75% - це іменники чоловічого роду, 20% - іменників середнього
                роду і лише 5% жіночого.
            </StyledAlert>
            <StyledRuleDescription>
                <span>Множина</span> формується набагато легше.
                <br />
                <span>Множина неозначена форма</span> - додаємо закінчення{" "}
                <span>Er</span> до іменника.{" "}
                <StyledRuleExample>
                    Приклади: "to hunder" ("якісь два песика"), "to lamper"
                    ("якісь дві лампи"), "to epler" ("якісь два яблука").
                </StyledRuleExample>
                <br />
                <span>Множина означена форма</span> - додаємо закінчення{" "}
                <span>Ene</span> до іменника.{" "}
                <StyledRuleExample>
                    Приклади: "to hundene" ("конкретні два песика"), "to
                    lampene" ("конкретні дві лампи"), "to eplene" ("конкретні
                    два яблука").
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Якщо іменник
                закінчується на голосну то вона просто відкидається а не
                дублюється.{" "}
                <StyledRuleExample>Eple - Epler а не Epleer.</StyledRuleExample>{" "}
                .
            </StyledAlert>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>Важливим винятком є
                іменники <span>середнього роду</span> що мають лише{" "}
                <span>одну голосну</span>! В{" "}
                <span>неозначеній формі множини</span> вони пишуться як в
                однині, тобто без закінчення Er.{" "}
                <StyledRuleExample>
                    Приклад: "et glass" ("одна склянка"), "to glass" ("дві
                    склянки").
                </StyledRuleExample>
            </StyledAlert>
            <StyledRuleDescription>
                Багато іменників чоловічого роду, які закінчуються на{" "}
                <span>-er</span> в однині, ми відмінюємо у множині трохи інакше,
                ніж інші іменники:
                <br />
                <StyledRuleExample>
                    en innvandrer - innvandreren - innvandrer<span>e</span> -
                    innvandrer<spna>ne</spna>. <br />
                    en lærer - læreren - lærer<span>e</span> - lærer
                    <span>ne</span>.
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Є кілька нюансів використання визначеної та невизначеної форми
                іменника:
                <br />
                Якщо іменник стоїть після "av" ("з/серед") то він ставиться в
                визначеній формі.
                <StyledRuleExample>
                    Наприклад: "Det er mange innvandrere i Norge, og mange{" "}
                    <span>av</span> innvandrer<span>ne</span>" er gift med andre
                    innvandrere.{" "}
                </StyledRuleExample>
                <br />
                Ми використовуємо означену форму iменника перед присвійними
                прикметниками.{" "}
                <StyledRuleExample>
                    Наприклад: foreldr<span>ene</span> mine, far<span>en</span>{" "}
                    min, liv<span>et</span> vårt.
                </StyledRuleExample>
                <br />
                Ми вживаємо неозначену форму після присвійного прикметника та
                після iменника вказуючого на власника - з "s" закінченням.{" "}
                <StyledRuleExample>
                    Наприклад: min alder, mitt liv, pappas jobb.
                </StyledRuleExample>
                <br />
                Якщо іменник стоїть в реченні після числівника то він ставиться
                в невизначеній формі.{" "}
                <StyledRuleExample>
                    Наприклад: "Jeg tror at det er <span>tjue</span> lærer
                    <span>e</span> på norskkurset".
                </StyledRuleExample>
            </StyledRuleDescription>
            <StyledRuleDescription>
                Іноді нам потрібно зробити іменник з дієслова. Це зробити не
                складно, потрібно відкинути закінчення "е" у дієслова та додати
                закінчення "<span>ing</span>".
                <br />
                <StyledRuleExample>
                    Наприклад: å forandre - en forandr<span>ing</span>, å
                    integrere - en intrgrer<span>ing</span>.
                </StyledRuleExample>
            </StyledRuleDescription>
        </StyledRuleWrapper>
    );
};

export default RuleNouns;
