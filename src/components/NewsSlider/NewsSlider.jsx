import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
    StyledSwiper,
    StledNewsCard,
    StyledNewsCardTitle,
    StyledNewsDescription,
    StyledNewsImg,
    StyledNewsDate,
    StyledNewsSource,
    StyledNewsDataWrapper,
    StyledNewsLink,
    StyledNewsCardContent,
} from "./NewsSlider.styled";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import abstractImg from "../../assets/moun.webp";
import UpArrowSvg from "../../components/common/svg/UpArrowSvg";

const NewsSlider = ({ newsItems }) => {
    return (
        <StyledSwiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                960: { slidesPerView: 3, spaceBetween: 30 },
            }}
        >
            {newsItems.map((news, index) => (
                <SwiperSlide key={index}>
                    <StledNewsCard>
                        <StyledNewsCardContent>
                            <StyledNewsCardTitle>
                                {news.title}
                            </StyledNewsCardTitle>
                            <StyledNewsImg src={news.image || abstractImg} />
                            <StyledNewsDescription>
                                {news.description} {news.content.slice(0, -20)}{" "}
                                ...
                            </StyledNewsDescription>
                        </StyledNewsCardContent>
                        <StyledNewsDataWrapper>
                            <StyledNewsSource>
                                {news.source_name}
                            </StyledNewsSource>
                            <StyledNewsLink
                                href={news.url}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <UpArrowSvg /> Читати оригінал статті
                            </StyledNewsLink>
                            <StyledNewsDate>
                                {new Date(news.publishedAt).toLocaleString(
                                    "ua-UA",
                                    {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }
                                )}{" "}
                            </StyledNewsDate>
                        </StyledNewsDataWrapper>
                    </StledNewsCard>
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

NewsSlider.propTypes = {
    newsItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, // Уникальный идентификатор новости
            title: PropTypes.string.isRequired, // Заголовок новости
            description: PropTypes.string, // Описание (может быть пустым)
            content: PropTypes.string, // Полный текст новости (может быть пустым)
            url: PropTypes.string, // Ссылка на оригинал новости
            image: PropTypes.string, // Ссылка на изображение
            publishedAt: PropTypes.string, // Дата публикации в ISO-формате
            source_name: PropTypes.string, // Название источника
            source_url: PropTypes.string, // URL источника
        })
    ).isRequired,
};

export default NewsSlider;
