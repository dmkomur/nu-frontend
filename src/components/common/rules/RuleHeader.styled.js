import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import materialPalette from "../../../styles/palette";

export const StyledRuleHeader = styled.h3`
    display: inline-block;
    font-weight: 700;
    padding: 8px 16px;
    font-size: 24px;
    border-radius: 40px;
    background-color: ${materialPalette.surfaceLightBlue};
    color: ${materialPalette.primary};
    margin: 16px 0px;
    text-align: center;
    @media (min-width: ${breakpoints.tablet}) {
        text-align: left;
        border-radius: 24px;
    }

    @media (min-width: ${breakpoints.desktop}) {
    }
`;
