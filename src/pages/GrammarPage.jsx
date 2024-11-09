import { Outlet } from "react-router-dom";
import Container from "../components/common/container/Container";
import StyledSectionHeader from "../components/common/sectionHeader/SectionHeader.styled";
import {
    StyledGrammarNavWrapper,
    StyledRuleLink,
} from "../components/GrammarNavigation/GrammarNavigation.styled";
import StyledWarning from "../components/Warning/Warning.styled";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GrammarPage = () => {
    const rules = [
        {
            ruleName: "sentences",
            ruleLable: "Будова речення",
        },
        {
            ruleName: "pronoun",
            ruleLable: "Займенник",
        },
        {
            ruleName: "nouns",
            ruleLable: "Іменник",
        },

        {
            ruleName: "verb",
            ruleLable: "Дієслово",
        },
        {
            ruleName: "modal",
            ruleLable: "Модальне дієслово",
        },
        {
            ruleName: "imperative",
            ruleLable: "Наказова форму дієслова",
        },
        {
            ruleName: "date",
            ruleLable: "Дата і час",
        },
        {
            ruleName: "location",
            ruleLable: "Розташування",
        },
        {
            ruleName: "direction",
            ruleLable: "Напрям",
        },
        {
            ruleName: "past",
            ruleLable: "Минулий час",
        },
        {
            ruleName: "question",
            ruleLable: "Питання",
        },
        {
            ruleName: "adjective",
            ruleLable: "Прикметник",
        },
        {
            ruleName: "comparison",
            ruleLable: "Порівняння",
        },
        {
            ruleName: "leddsetning",
            ruleLable: "Підрядне речення",
        },
        {
            ruleName: "possessive",
            ruleLable: "Присвійні прикметники",
        },
    ];

    const location = useLocation();
    const [showWarning, setShowWarning] = useState(true);

    useEffect(() => {
        setShowWarning(location.pathname === "/grammar");
    }, [location]);

    return (
        <Container>
            <StyledSectionHeader>Граматика норвезької мови</StyledSectionHeader>
            <nav>
                <StyledGrammarNavWrapper>
                    {rules.map((rule) => (
                        <li key={rule.ruleName}>
                            <StyledRuleLink to={rule.ruleName}>
                                {rule.ruleLable}
                            </StyledRuleLink>
                        </li>
                    ))}
                </StyledGrammarNavWrapper>
            </nav>
            {showWarning && (
                <StyledWarning>
                    <span>Увага!</span>
                    <br />
                    Усі матеріали на цьому сайті створені не професійним
                    викладачем, а звичайною людиною, яка також починала вивчати
                    норвезьку мову з нуля. Тут ви знайдете прості пояснення та
                    поради, засновані на особистому досвіді, що допоможуть
                    зробити перші кроки у вивченні мови. Ми прагнемо зробити
                    навчання доступним і зрозумілим для кожного, однак для
                    поглибленого вивчення рекомендуємо звернутися до
                    сертифікованих викладачів чи спеціалізованих курсів.
                </StyledWarning>
            )}
            <Outlet />
        </Container>
    );
};

export default GrammarPage;
