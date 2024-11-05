import styled from "styled-components";
import materialPalette from "../../styles/palette";

export const StyledScrollUpButton = styled.button`
    padding-top: 4px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    color: white;
    background-color: ${materialPalette.secondary}; /* Цвет кнопки */
    border: none;
    border-radius: 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 300ms ease;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3), 0px 3px 6px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: ${materialPalette.secondaryVariant};
        transition: all 300ms ease;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2),
            0px 2px 4px rgba(0, 0, 0, 0.15);
    }
`;
