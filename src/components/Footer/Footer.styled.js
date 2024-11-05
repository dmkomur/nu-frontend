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
        &::before {
            background-color: ${materialPalette.secondary};
            color: white;
        }
    }

    &::before {
        content: "→";
        position: absolute;
        left: 0;
        font-size: 18px;
        color: ${materialPalette.primary}; /* Синий цвет для символа ">" */
        width: 18px;
        height: 18px;
        background-color: ${materialPalette.onSecondary};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ease-out 300ms;
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
