import styled from "styled-components";
import materialPalette from "../../styles/palette";

export const StyledFooter = styled.div`
    background-color: ${materialPalette.primaryVariant};
    padding: 16px 0px;
    width: 100%;
    margin-top: 16px;
`;
export const StyledFooterLink = styled.a`
    position: relative;
    padding: 8px 0px 8px 30px; /* Отступ слева для размещения круга */
    font-size: 18px;
    color: ${materialPalette.surfaceVariant};
    transition: all ease-out 300ms;
    display: inline-flex;
    align-items: center;

    &:hover {
        color: ${materialPalette.secondary};
        transition: all ease-out 300ms;
        svg {
            fill: ${materialPalette.secondary};
        }
    }

    svg {
        position: absolute;
        left: 0;
        width: 18px;
        height: 18px;
        fill: ${materialPalette.onSecondary}; /* Цвет SVG стрелки */
        transition: all ease-out 300ms;
        transform: rotate(90deg);
    }
`;

export const StyledFooterLinkList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;
    list-style-type: none;
`;
export const StyledFooterLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
`;
