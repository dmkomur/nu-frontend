import { StyledRuleHeader } from "../../common/rules/RuleHeader.styled";
import StyledRuleDescription from "../../common/rules/RuleDescription";
import {
    StyledAlert,
    StyledAlertLabel,
} from "../../common/rules/RuleAlert.styled";
import { StyledRuleWrapper } from "../../common/rules/RulePWrapper.styled";

const RuleDate = () => {
    return (
        <StyledRuleWrapper>
            <StyledRuleHeader>Дата і час (Dato og tid)</StyledRuleHeader>
            <StyledRuleDescription>
                З датами в норвезькій мові все як і в нас, треба лише
                запам'ятати назви та норвежці ставлять "." після цифри в даті
                тим самим вказуючи що день не п'ять а п'ятий.
            </StyledRuleDescription>
            <StyledRuleDescription>
                З цікавого хіба що специфічні слова та вирази:
                <br />
                <span>I fjor</span> - минулого року.
                <br />
                <span>Forrige måned</span> - минулого місяця.
                <br />
                <span>Forrige uke</span> - минулого тижня.
                <br />
                <span>I forgårs</span> - позвачера.
                <br />
                <span>Forrige tirsdag</span> - минулого вівторка.
                <br />
                <span>For to dager siden</span> - два дні тому.
                <br />
                <span>I går</span> - вчора.
                <br />
                <span>I dag</span> - сьогодні.
                <br />
                <span>Nå</span> - зараз.
                <br />
                <span>I morgen</span> - завтра.
                <br />
                <span>Neste onsdag</span> - наступної середи.
                <br />
                <span>Neste uke</span> - наступного тижня.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Пора року:
                <br />
                <span>Vinter</span> - зима.
                <br />
                <span>Vår</span> - весна.
                <br />
                <span>Sommer</span> - літо.
                <br />
                <span>Høst</span> - осінь.
            </StyledRuleDescription>
            <StyledRuleDescription>
                Час доби:
                <br />
                <span>Morgen</span> - ранок.
                <br />
                <span>Middag</span> - обід.
                <br />
                <span>Kveld</span> - вечір.
                <br />
                <span>Natt</span> - ніч.
            </StyledRuleDescription>
            <StyledRuleDescription>
                З годинником справи складніші. Норвежці поділяють годину на дві
                половини (подумки розділіть годинник на верхню половину з 9 до 3
                і нижню з 3 до 9). З цього випливає, що є{" "}
                <span>5 хвилин до другої годин</span> (13:55), а є{" "}
                <span>5 хвилин до півдругої</span> (13:25). Також можна сказати{" "}
                <span>10 хвилин на п'яту</span> (16:10) та{" "}
                <span>10 хвилин після пів на п'яту</span> (16:40).
                <br />
                Замість <span>До</span> норвежці кажуть <span>På</span>. <br />
                Замість <span>Після</span> кажуть <span>Over</span>.
            </StyledRuleDescription>
            <StyledRuleDescription>
                З теорією розібралися, що на практиці? Простіше навести
                приклади:
                <br />
                <span>Kvart over tre</span> - п'ятнадцять хвилин четвортої (або
                "п'ятнадцять хвилин після третьої" якщо так простіше для
                розуміння).
                <br />
                <span>Ti på halv fem</span> - десять хвилин до пів на п'яту
                (04:20).
                <br />
                <span>Kvart på ni</span> - без п'ятнадцяти дев'ять (08:45).
                <br />
                <span>Fem over halv et</span> - п'ять хвилин після половини
                першої (00:35).
                <br />
                <span>Klokka er tolv</span> - дванадцята година (12:00).
                <br />
                <span>Klokka er halv syv</span> - час о пів на сьому (18:30).
            </StyledRuleDescription>
            <StyledAlert>
                <StyledAlertLabel>Важливо!</StyledAlertLabel>На практиці
                аналоговий час використовують далеко не всі і можна просто
                сказати – "сімнадцять сорок три". І швидше за все Вас
                зрозуміють.
            </StyledAlert>
        </StyledRuleWrapper>
    );
};
export default RuleDate;
