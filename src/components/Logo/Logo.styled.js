import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import materialPalette from "../../styles/palette";
import { Link } from "react-router-dom";
export const StyledLogoWrapper = styled(Link)`
    display: flex;
    gap: 8px;
    justify-content: center;
    cursor: pointer;
    &:hover p {
        color: ${materialPalette.secondary};
    }
`;

export const StyledLogoText = styled.p`
    font-family: "Abril Fatface", serif;
    font-size: 28px;
    color: ${materialPalette.primary};
    transition: color 300ms ease;
    position: relative;
    span {
        color: ${materialPalette.secondary};
    }
    &::before {
        content: "";
        position: absolute;
        left: calc(50% - 10px);
        top: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #005eb8;
        transition: top 300ms ease;
    }

    &::after {
        content: "";
        position: absolute;
        left: calc(50% + 8px);
        top: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ffd700;
        transition: top 300ms ease;
    }

    &:hover::before {
        top: 0px;
    }

    &:hover::after {
        top: 0px;
    }
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 36px;
        &::before {
            content: "";
            top: 6px;
        }

        &::after {
            top: 6px;
        }
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 38px;
    }
`;
export const StyledLogoPic = styled.img`
    height: auto;
    width: 70px;
`;
