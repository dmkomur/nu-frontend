import styled from "styled-components";
import { NavLink } from "react-router-dom";
import materialPalette from "../../styles/palette";
import breakpoints from "../../styles/breakpoints";

export const StyledGrammarNavWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 26px 16px;
    list-style-type: none;
    flex-wrap: wrap;
    padding: 16px;
    @media (min-width: ${breakpoints.tablet}) {
        gap: 28px 18px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        gap: 26px 20px;
    }
`;
export const StyledRuleLink = styled(NavLink)`
    padding: 8px 16px;
    font-size: 20px;
    color: ${materialPalette.primary};
    background-color: ${materialPalette.surface};
    transition: all 300ms ease;
    border-radius: 20px;

    &.active {
        color: ${materialPalette.onPrimary};
        background-color: ${materialPalette.primary};
        transition: all 300ms ease;
        &:hover {
            color: ${materialPalette.surfaceLightRed};
            transition: all 300ms ease;
        }
    }

    &:hover {
        color: ${materialPalette.secondary};
        transition: all 300ms ease;
    }
`;
