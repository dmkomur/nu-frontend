import styled from "styled-components";
import fjordImage from "/src/assets/hero.png";

export const HeroSection = styled.section`
    width: 100%;
    height: 80vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
        url(${fjordImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 16px;
    font-family: Roboto;
`;

export const HeroContent = styled.div`
    text-align: center;
    max-width: 800px; // Ограничение по ширине контента внутри
    padding: 20px;
`;

export const HeroTitle = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`;

export const HeroSubtitle = styled.p`
    font-size: 32px;
`;
