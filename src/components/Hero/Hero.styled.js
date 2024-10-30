import styled from "styled-components";
import natureImg from "/src/assets/munch.webp";
import natureImgS from "/src/assets/munch-s.webp";
import breakpoints from "../../styles/breakpoints";
import materialPalette from "../../styles/palette";

export const HeroSection = styled.section`
    width: 100%;
    height: 400px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${natureImgS});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    @media (min-width: ${breakpoints.tablet}) {
        background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ),
            url(${natureImg});
        background-position: center 86%;
    }

    @media (min-width: ${breakpoints.desktop}) {
        background-position: center 86%;
    }
`;
export const HeroContent = styled.div`
    padding: 132px 0px;
    max-width: 500px;
`;

export const HeroTitle = styled.h1`
    font-size: 42px;
    margin-bottom: 16px;
    font-weight: 700;
    display: inline-block;
    color: ${materialPalette.surface};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 46px;
        margin-bottom: 24px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        font-size: 48px;
    }
`;

export const HeroSubtitle = styled.p`
    font-size: 24px;
    display: inline-block;
    color: ${materialPalette.surface};
    font-weight: 700;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 32px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        font-size: 36px;
    }
`;
