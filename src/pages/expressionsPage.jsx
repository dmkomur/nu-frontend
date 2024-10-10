import { useEffect, useState } from "react";
import Container from "../components/common/container/Container";
import axios from "axios";
import ExpressionCard from "../components/ExpressionCard/ExpressionCard";

const ExpresionsPage = () => {
    const [expressions, setExpressions] = useState([]);
    const [loading, setLoading] = useState(true);
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

    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
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
            </div>
        </Container>
    );
};

export default ExpresionsPage;
