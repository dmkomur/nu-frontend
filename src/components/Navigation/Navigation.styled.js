import { NavLink } from "react-router-dom";
import styled from "styled-components";
import materialPalette from "../../styles/palette";

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 8px 16px;
    border-radius: 17px;
    background-color: ${materialPalette.surfaceLightBlue};
    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 22px;
    font-weight: 700;
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
    font-size: 40px;
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 20px;
    z-index: 1001;
    @media (max-width: 768px) {
        display: block;
    }

    &::before {
        content: ${({ open }) => (open ? '"✕"' : '"☰"')};
        font-size: 40px;
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
    padding: 80px 20px;
    z-index: 1000;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    display: flex;
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
