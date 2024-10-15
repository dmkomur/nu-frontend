import styled from "styled-components";
import materialPalette from "../../styles/palette";

export const StyledPaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 20px 0;
`;

export const StyledPaginationButton = styled.button`
    background-color: ${materialPalette.surface};
    border: none;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 16px;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        transition: all 300ms ease;
    }
    &:hover {
        background-color: ${materialPalette.surface};
    }

    &:disabled {
        background-color: ${materialPalette.surfaceVariant};
        cursor: not-allowed;
    }
`;

export const StyledPageNumber = styled.span`
    font-weight: ${(props) => (props["data-active"] ? 700 : 400)};
    color: ${(props) =>
        props["data-active"]
            ? materialPalette.secondary
            : materialPalette.primary};
`;
