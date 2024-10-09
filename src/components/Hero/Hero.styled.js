import styled from "styled-components";
import fjordImage1x from "/src/assets/berry@1x.jpg";
import fjordImage2x from "/src/assets/berry@2x.jpg";
import breakpoints from "../../styles/breakpoints";

export const HeroSection = styled.section`
    width: 100%;
    height: 520px;
    background-image: linear-gradient(rgba(0, 0, 0.3, 0.5), rgba(0, 0, 0, 0.6)),
        url(${fjordImage1x});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    border-radius: 24px;
    padding: 8px;

    @media only screen and (-webkit-min-device-pixel-ratio: 2),
        only screen and (min-resolution: 192dpi) {
        background-image: linear-gradient(
                rgba(0, 0, 0.5, 0.7),
                rgba(0, 0, 0.1, 0.6)
            ),
            url(${fjordImage2x});
    }

    @media (min-width: ${breakpoints.tablet}) {
        height: 580px;
        border-radius: 32px;
        pad: 12px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        height: 680px;
        border-radius: 48px;
        padding: 16px;
    }
`;

export const HeroContent = styled.div`
    text-align: center;
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HeroTitle = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 66px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        font-size: 72px;
    }
`;

export const HeroSubtitle = styled.p`
    font-size: 32px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 38px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        font-size: 42px;
    }
`;
