import styled from "styled-components";
import materialPalette from "../../styles/palette";

export const StyledTheme = styled.span`
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
export const StyledCard = styled.div`
    background-color: ${materialPalette.surface};
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 36px 20px 20px 20px;
    width: 280px;
    text-align: center;
    position: relative;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    overflow: hidden;
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
`;

export const StyledTextNo = styled.text`
    font-size: 24px;
    margin: 10px 0;
    text-align: center;
    color: ${materialPalette.secondaryVariant};
`;
export const StyledTextUa = styled.text`
    font-size: 24px;
    margin: 10px 0;
    text-align: center;
    color: ${materialPalette.primary};
`;

export const StyledDevider = styled.div`
    height: 1px;
    background-color: ${materialPalette.surfaceVariant};
    margin: 10px 0;
`;
