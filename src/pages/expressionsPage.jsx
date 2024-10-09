import { useEffect, useState } from "react";
import Container from "../components/common/container/Container";
import axios from "axios";

const ExpresionsPage = () => {
    const [expressions, setExpressions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("http://localhost:3000/phrases")
            .then((response) => {
                setExpressions(response.data);
                setLoading(false); // Устанавливаем загрузку в false после получения данных
            })
            .catch((error) => {
                console.error("Error fetching expressions:", error);
                setLoading(false); // Устанавливаем загрузку в false в случае ошибки
            });
    }, []);

    return (
        <Container>
            {loading ? (
                <p>Loading...</p> // Сообщение о загрузке
            ) : (
                expressions.map((expression) => (
                    <p key={expression.id || expression.no}>{expression.no}</p>
                ))
            )}
        </Container>
    );
};

export default ExpresionsPage;
