import {
    StyledCommunitySection,
    StyledCommunityTextContent,
    StyledCommunityImage,
} from "./Community.styled";
import Container from "../common/container/Container";
import menImage from "../../assets/men.webp";
import kidsImage from "../../assets/kids.webp";
import pubImage from "../../assets/pub.webp";

const Community = () => {
    return (
        <Container>
            <StyledCommunitySection>
                <StyledCommunityTextContent>
                    <StyledCommunityImage src={menImage} alt="людина" />
                    <p>
                        Норвегія – країна, яка славиться не лише своїми
                        природними красотами, але й унікальним суспільством, що
                        дотримується особливих норм і традицій. Ставлення
                        норвежців до чужинців, їхні цінності та звичаї
                        відрізняються від тих, до яких звикли люди зі Східної
                        Європи, включаючи Україну. Щоб зрозуміти, як функціонує
                        норвезьке суспільство, важливо знати про основні рис
                    </p>
                    <p>
                        Однією з перших речей, яку помічають іноземці в
                        Норвегії, є стриманість та закритість норвежців у
                        спілкуванні. На відміну від більш відкритих культур, у
                        Норвегії не прийнято проявляти сильні емоції або
                        заводити розмови з незнайомцями. Корінне населення може
                        здаватися навіть трохи холодним або відстороненим. Це
                        зовсім не означає, що норвежці недружелюбні, проте вони
                        надають перевагу приватності та глибокій особистій
                        дистанції.
                    </p>
                    <p>
                        Норвежці рідко роблять перший крок у знайомстві, і іноді
                        здається, що вони уникають зайвих контактів. Наприклад,
                        у громадському транспорті вони не сідають поруч із
                        незнайомими, якщо є вільні місця, і не вступають у
                        розмови без нагальної потреби. Це можна пояснити як
                        історичними, так і культурними чинниками. Століттями
                        норвежці звикли до життя в суворих природних умовах, де
                        часто важливіше було дбати про власну сім'ю та
                        господарство, ніж будувати широкі соціальні мережі.
                    </p>
                    <p>
                        Повага до особистого простору — одна з головних рис
                        норвезького суспільства. Тут не прийнято втручатися в
                        життя інших людей або ставити особисті запитання. Для
                        норвежців незалежність має велике значення, і вони
                        очікують такої ж поваги до своєї приватності від інших.
                        Таке ставлення особливо помітне в робочому середовищі,
                        де начальники не контролюють співробітників щохвилинно,
                        а співробітники самостійно планують свій день,
                        дотримуючись загальних дедлайнів. Однак ця незалежність
                        поєднується з сильною соціальною підтримкою. Норвежці
                        активно підтримують ідеї рівності, взаємодопомоги та
                        справедливості. Їхня соціальна система забезпечує високу
                        якість життя для всіх громадян, і це є предметом
                        гордості для багатьох мешканців країни.
                    </p>
                    <p>
                        Природа займає особливе місце в житті норвежців. Вони з
                        великою повагою ставляться до навколишнього середовища і
                        проводять багато часу на свіжому повітрі. Норвежці
                        обожнюють туризм, походи в гори, катання на лижах і
                        риболовлю. Культура "friluftsliv" (що перекладається як
                        "життя на відкритому повітрі") є невід'ємною частиною
                        норвезького життя. Це поняття включає відпочинок і
                        духовне збагачення через єднання з природою.
                    </p>
                    <StyledCommunityImage src={pubImage} alt="люди" />
                    <p>
                        До важливих норвезьких свят належать Різдво, яке
                        відзначається в колі сім'ї, та День Конституції 17
                        травня, коли по всій країні проходять паради та
                        урочистості. День Конституції є справжнім святом для
                        всіх норвежців: у цей день люди одягають національний
                        одяг "буннад", виходять на вулиці, співають гімн і
                        святкують незалежність та свободу країни.
                    </p>
                    <p>
                        Соціальна рівність – одна з основних цінностей
                        норвезького суспільства. У Норвегії існує сильне
                        переконання, що всі люди повинні мати рівні можливості
                        незалежно від свого походження, статі чи соціального
                        статусу. Це позначається і на стосунках у суспільстві:
                        норвежці не схильні до надмірної демонстрації багатства
                        чи статусу. Наприклад, багаті люди не носять дорогих
                        прикрас і не афішують свої доходи. Навпаки, скромність і
                        стриманість у поведінці вважаються важливими чеснотами.
                    </p>
                    <p>
                        Також важливо відзначити, що норвежці цінують чесність і
                        прозорість у взаєминах. У Норвегії не прийнято
                        обговорювати інших людей за їхньою спиною або
                        інтригувати. Люди висловлюють свою думку відкрито і
                        чекають від інших такої ж щирості.
                    </p>
                    <p>
                        Через специфіку норвезької культури інтеграція іноземців
                        у норвезьке суспільство може бути нелегкою. Новоприбулі
                        можуть відчути брак дружелюбності або зацікавленості з
                        боку місцевих мешканців, що часом призводить до почуття
                        самотності. Проте варто розуміти, що норвежці просто
                        поважають особистий простір і потребують більше часу для
                        побудови дружби. Знайомства тут зазвичай розвиваються
                        повільно, але якщо норвежець приймає вас до свого кола
                        спілкування, це означає справжню довіру та глибоку
                        повагу.
                    </p>
                    <p>
                        На перший погляд, норвежці можуть здаватися
                        відстороненими, проте за їхньою стриманістю ховається
                        щирість і доброзичливість. Важливо мати терпіння і бути
                        готовим до того, що на встановлення дружніх стосунків
                        може піти час. Інтегруючись у норвезьке суспільство,
                        іноземці також повинні поважати місцеві традиції і
                        звичаї.
                    </p>
                </StyledCommunityTextContent>
            </StyledCommunitySection>
        </Container>
    );
};

export default Community;