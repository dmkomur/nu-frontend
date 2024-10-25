import styled from "styled-components";
import materialPalette from "../../styles/palette";
import breakpoints from "../../styles/breakpoints";

const StyledWarning = styled.p`
    width: 100%;
    text-align: center;
    font-size: 24px;
    background-color: ${materialPalette.surfaceVariant};
    color: ${materialPalette.secondary};
    border-radius: 16px;
    padding: 16px;
    & span {
        font-size: 28px;
        font-weight: 700;
    }
    @media (min-width: ${breakpoints.tablet}) {
        padding: 98px 24px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        padding: 36px;
    }
`;

export default StyledWarning;
