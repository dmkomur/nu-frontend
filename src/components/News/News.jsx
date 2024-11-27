import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/container/Container";
import StyledSectionHeader from "../common/sectionHeader/SectionHeader.styled";
import NewsSlider from "../NewsSlider/NewsSlider";
import LoadingSpinner from "../common/loading/LoadingSpinner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const News = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://nu-backend-production.up.railway.app/api/news"
                );
                setNewsItems(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <StyledSectionHeader>Новини з України</StyledSectionHeader>
            <NewsSlider newsItems={newsItems} />
        </Container>
    );
};

export default News;
