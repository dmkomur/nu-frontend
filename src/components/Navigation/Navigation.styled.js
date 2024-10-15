import { NavLink } from "react-router-dom";
import styled from "styled-components";
import materialPalette from "../../styles/palette";

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 8px 16px;
    border-radius: 22px;
    border: 2px ${materialPalette.primary} solid;
    background-color: ${materialPalette.surface};
    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 22px;
    font-weight: 400;
    color: ${materialPalette.primary};
    transition: color 300ms ease;

    &.active {
        color: ${materialPalette.secondary};
        transition: color 300ms ease;
    }

    &:hover,
    &:focus {
        color: ${materialPalette.secondary};
        transition: color 300ms ease;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    padding: 0px;
    width: 40px;
    height: 40px;
    top: 6px;
    right: 10px;
    z-index: 1001;
    @media (max-width: 768px) {
        display: block;
    }

    svg {
        width: 36px;
        height: 36px;
        fill: ${({ open }) =>
            open ? materialPalette.secondary : materialPalette.primary};
    }
`;

export const MobileMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: ${materialPalette.surface};
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    padding: 100px 20px;
    z-index: 1000;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    display: flex;
    gap: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;
