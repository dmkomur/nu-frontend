import { useEffect, useState } from "react";
import Container from "../components/common/container/Container";
import axios from "axios";
import ExpressionCard from "../components/ExpressionCard/ExpressionCard";
import { StyledExpressionList } from "../components/Expressions/ExpressionsList.styled";
import StyledRadioGroup from "../components/Expressions/RadiobuttonGroup.styled";
import StyledRadioButton from "../components/Expressions/Radiobutton.styled";

const ExpresionsPage = () => {
    const options = ["Все", "Побут", "Школа"];

    const [expressions, setExpressions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (option) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/phrases")
            .then((response) => {
                setExpressions(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching expressions:", error);
                setLoading(false);
            });
    }, []);
    const filteredExpressions =
        selectedOption === "Все"
            ? expressions
            : expressions.filter(
                  (expression) => expression.theme === selectedOption
              );
    return (
        <Container>
            <StyledRadioGroup>
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
                            onChange={() => handleChange(option)}
                        />
                        {option}
                    </StyledRadioButton>
                ))}
            </StyledRadioGroup>
            <StyledExpressionList>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    filteredExpressions.map((expression) => (
                        <ExpressionCard
                            key={expression.id}
                            expression={expression}
                        />
                    ))
                )}
            </StyledExpressionList>
        </Container>
    );
};

export default ExpresionsPage;
