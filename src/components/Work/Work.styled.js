import styled from "styled-components";
import materialPalette from "../../styles/palette";
import breakpoints from "../../styles/breakpoints";

export const StyledWorkSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.54;
    color: ${materialPalette.primary};
    padding: 46px 8px;
    border-radius: 16px;
    background-color: ${materialPalette.surface};
    @media (min-width: ${breakpoints.tablet}) {
        padding: 46px 12px;
        border-radius: 28px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        padding: 46px 16px;
        border-radius: 36px;
    }
`;

export const StyledWorkImage = styled.img`
    width: 320px;
    height: 160px;
    border-radius: 160px;
    object-fit: cover;
    display: block;
    margin: 16px auto 16px auto;
    @media (min-width: ${breakpoints.tablet}) {
        margin: 16px;
        float: left;
    }
    @media (min-width: ${breakpoints.desktop}) {
        margin: 20px;
    }
`;

export const StyledWorkTextContent = styled.div`
    overflow: hidden;
`;
export const StyledWorkSubtitle = styled.h4`
    font-size: 24px;
    font-weight: 700;
`;
