import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import materialPalette from "../../../styles/palette";

const StyledRuleDescription = styled.p`
    display: inline-block;
    padding: 8px 16px;
    font-size: 20px;
    line-height: 1.5;
    border-radius: 16px;
    background-color: ${materialPalette.surface};
    color: ${materialPalette.primaryVariant};
    text-align: left;
    & span {
        color: ${materialPalette.secondaryVariant};
    }
    @media (min-width: ${breakpoints.tablet}) {
        border-radius: 24px;
    }

    @media (min-width: ${breakpoints.desktop}) {
    }
`;
export default StyledRuleDescription;
