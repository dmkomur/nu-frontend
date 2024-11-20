import { Swiper } from "swiper/react";
import styled from "styled-components";
import materialPalette from "../../styles/palette";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import breakpoints from "../../styles/breakpoints";

export const StyledSwiper = styled(Swiper)`
    padding: 44px 0px;
    width: 100%;
    margin-bottom: 72px;

    .swiper-pagination {
        bottom: 10px;
    }
    .swiper-pagination-bullet {
        background: ${materialPalette.secondary};
        width: 12px;
        height: 12px;
        opacity: 0.5;
        transition: all 0.3s ease;
    }

    .swiper-pagination-bullet-active {
        background: ${materialPalette.secondaryVariant};
        width: 24px;
        height: 12px;
        opacity: 1;
        border-radius: 6px;
    }
    .swiper-button-next,
    .swiper-button-prev {
        color: ${materialPalette.secondary};
    }
`;

export const StledNewsCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${materialPalette.surface};
    justify-content: space-between;
    border-radius: 16px;
    width: 100%;
    height: 560px;
    gap: 16px;
    text-align: center;
    position: relative;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    overflow: hidden;
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
    @media (min-width: ${breakpoints.tablet}) {
        width: 362px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        width: 394px;
    }
`;

export const StyledNewsCardTitle = styled.h5`
    font-size: 18px;
    color: ${materialPalette.primary};
`;

export const StyledNewsDescription = styled.p`
    font-size: 20px;
    color: ${materialPalette.primary};
    overflow: hidden;
    overflow-y: scroll;
`;
export const StyledNewsImg = styled.img`
    width: 100%;
    height: 56px;
    border-radius: 28px;
    background-color: ${materialPalette.secondaryVariant};
    object-fit: cover;
    object-position: center;
    overflow: hidden;
`;
export const StyledNewsDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    background-color: ${materialPalette.surfaceVariant};
    padding: 8px;
    border-radius: 16px;
`;
export const StyledNewsCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 12px;
    overflow: hidden;
`;
export const StyledNewsSource = styled.p`
    font-size: 18;
    color: ${materialPalette.primary};
    text-align: left;
`;
export const StyledNewsDate = styled.p`
    font-size: 16;
    color: ${materialPalette.secondaryVariant};
    text-align: left;
`;
export const StyledNewsLink = styled.a`
    display: block;
    font-size: 18;
    color: ${materialPalette.primary};
    padding-left: 16px;

    &:hover {
        color: ${materialPalette.secondary};
        transition: all ease-out 300ms;
        svg {
            fill: ${materialPalette.secondary};
        }
    }

    svg {
        position: absolute;
        left: 24px;
        width: 18px;
        height: 18px;
        fill: ${materialPalette.primary}; /* Цвет SVG стрелки */
        transition: all ease-out 300ms;
        transform: rotate(90deg);
    }
`;
