import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import materialPalette from "../../styles/palette";
import natureImg from "/src/assets/moun.webp";

export const StyledNewLifeConnector = styled.div`
    position: relative;
    height: 240px; /* Высота по умолчанию для мобильных устройств */
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: ${materialPalette.primaryVariant};
        z-index: -1;
        clip-path: polygon(
            0 100%,
            10% 75%,
            /* Широкие и низкие горы для мобильного отображения */ 20% 85%,
            30% 70%,
            40% 80%,
            50% 60%,
            60% 80%,
            70% 70%,
            80% 85%,
            90% 60%,
            100% 100%
        );
    }

    @media (min-width: ${breakpoints.tablet}) {
        height: 320px; /* Высота для планшетов */

        &::after {
            clip-path: polygon(
                0 100%,
                10% 70%,
                20% 85%,
                30% 60%,
                40% 75%,
                50% 50%,
                60% 85%,
                70% 60%,
                80% 75%,
                90% 50%,
                100% 100%
            );
        }
    }

    @media (min-width: ${breakpoints.desktop}) {
        height: 480px; /* Высота для настольных устройств */

        &::after {
            clip-path: polygon(
                0 100%,
                10% 75%,
                20% 90%,
                30% 65%,
                40% 80%,
                50% 55%,
                60% 90%,
                70% 65%,
                80% 80%,
                90% 55%,
                100% 100%
            );
        }
    }
`;
export const StyledSectionWrapper = styled.div`
    width: 100%;
    background: ${materialPalette.primaryVariant};
`;
export const StyledNewLifeText = styled.p`
    color: ${materialPalette.onPrimary};
    font-size: 22px;
    padding: 16px 0px;
    line-height: 1.42;
`;

export const StyledWindow = styled.div`
    display: flex;
    width: 320px;
    height: 460px;
    padding: 24px;
    gap: 24px;
    background-image: url(${natureImg}); /* фон для общей рамы */
    background-size: cover;
    box-sizing: content-box;
    border-radius: 16px;

    @media (min-width: ${breakpoints.tablet}) {
        padding: 32px;
        width: 380px;
        height: 520px;
        gap: 32px;
    }
`;

export const StyledLeftPane = styled.div`
    flex: 1;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
`;

export const StyledRightPane = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
    border-radius: 8px;

    @media (min-width: ${breakpoints.tablet}) {
        gap: 32px;
    }
`;

export const StyledTopRightPane = styled.div`
    flex: 1;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
`;

export const StyledBottomRightPane = styled.div`
    flex: 1;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
`;

export const StyledWindowHeader = styled.p`
    position: absolute;
    left: 170px;
    top: 180px;
    font-size: 148px;
    font-weight: 700;
    color: ${materialPalette.secondary};
    @media (min-width: ${breakpoints.tablet}) {
        left: 170px;
        top: 180px;
    }
`;
