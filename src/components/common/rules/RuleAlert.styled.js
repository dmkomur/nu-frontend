import materialPalette from "../../../styles/palette";
import styled from "styled-components";

export const StyledAlertLabel = styled.span`
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: ${materialPalette.surfaceLightRed};
    color: ${materialPalette.secondary};
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 12px;
    text-align: center;
`;
export const StyledAlert = styled.p`
    position: relative;
    border-radius: 20px;
    border: 4px solid ${materialPalette.surfaceLightRed};
    color: ${materialPalette.primary};
    padding: 38px 16px 16px 16px;
    font-size: 20px;
    line-height: 1.5;

    margin: 16px 0px;
    & span {
        color: ${materialPalette.secondary};
    }
`;
