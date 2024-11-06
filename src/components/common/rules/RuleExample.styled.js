import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import materialPalette from "../../../styles/palette";

const StyledRuleExample = styled.i`
    font-size: 18px;
    font-style: italic;
    color: ${materialPalette.primary};
    border-radius: 4px;
    background-color: ${materialPalette.surfaceVariant};
    padding: 0 4px;
    & span {
        color: ${materialPalette.secondary};
    }
    @media (min-width: ${breakpoints.tablet}) {
    }

    @media (min-width: ${breakpoints.desktop}) {
    }
`;
export default StyledRuleExample;
