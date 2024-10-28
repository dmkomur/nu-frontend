import { useEffect, useState } from "react";
import Container from "../components/common/container/Container";
import axios from "axios";
import ExpressionCard from "../components/ExpressionCard/ExpressionCard";
import { StyledExpressionList } from "../components/Expressions/ExpressionsList.styled";
import StyledRadioGroup from "../components/Expressions/RadiobuttonGroup.styled";
import StyledRadioButton from "../components/Expressions/Radiobutton.styled";
import Pagination from "../components/Expressions/ExpressionsPagination";

const ExpresionsPage = () => {
    const options = [
        "Все",
        "Побут",
        "Школа",
        "Лікарня",
        "Транспорт",
        "Магазин",
        "Робота",
        "Спорт",
        "Вечірка",
    ];

    const [expressions, setExpressions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [page, setPage] = useState(1);
    const [totalPhrases, setTotalPhrases] = useState(0);

    const handleChangeTheme = (option) => {
        setSelectedOption(option);
        setPage(1);
    };

    const scrollToRadio = () => {
        const logoElement = document.getElementById("radio");
        if (logoElement) {
            logoElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        axios
            .get(`https://nu-backend.railway.internal/api/phrases`, {
                params: { theme: selectedOption, page: page },
            })

            .then((response) => {
                setExpressions(response.data.phrases[0]);
                setTotalPhrases(response.data.total);
                setLoading(false);
                scrollToRadio();
            })
            .catch((error) => {
                console.error("Error fetching expressions:", error);
                setLoading(false);
            });
    }, [page, selectedOption]);

    return (
        <Container>
            <StyledRadioGroup id="radio">
                {options.map((option) => (
                    <StyledRadioButton
                        key={option}
                        checked={selectedOption === option}
                    >
                        <input
                            type="radio"
                            name="options"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleChangeTheme(option)}
                        />
                        {option}
                    </StyledRadioButton>
                ))}
            </StyledRadioGroup>

            <StyledExpressionList>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    expressions.map((expression) => (
                        <ExpressionCard
                            key={expression.id}
                            expression={expression}
                        />
                    ))
                )}
            </StyledExpressionList>
            <Pagination
                key={page}
                currentPage={page}
                totalPages={Math.ceil(totalPhrases / 48)}
                onPageChange={setPage}
            />
        </Container>
    );
};

export default ExpresionsPage;
