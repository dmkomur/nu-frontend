import styled from "styled-components";
import materialPalette from "../../../styles/palette";
import breakpoints from "../../../styles/breakpoints";

const StyledSectionHeader = styled.h2`
    display: inline-block;
    font-weight: 700;
    padding: 8px 16px;
    font-size: 32px;
    border: 22px;
    border-radius: 48px;
    background-color: ${materialPalette.surfaceLightBlue};
    color: ${materialPalette.primary};
    margin: 24px 0px 16px 0px;
    text-align: center;
    @media (min-width: ${breakpoints.tablet}) {
        text-align: left;
        border-radius: 24px;
    }

    @media (min-width: ${breakpoints.desktop}) {
    }
`;
export default StyledSectionHeader;
