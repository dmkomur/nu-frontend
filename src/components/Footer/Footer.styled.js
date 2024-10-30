import styled from "styled-components";
import materialPalette from "../../styles/palette";

export const StyledFooter = styled.div`
    background-color: ${materialPalette.primaryVariant};
    padding: 16px 0px;
    width: 100%;
    margin-top: 16px;
`;
export const StyledFooterLink = styled.a`
    padding: 8px 0px;
    font-size: 18px;
    color: ${materialPalette.surfaceVariant};
    transition: all ease-out 300ms;
    &:hover {
        color: ${materialPalette.secondary};
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
