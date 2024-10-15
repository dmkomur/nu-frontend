import styled from "styled-components";

export const StyledPaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 20px 0;
`;

export const StyledPaginationButton = styled.button`
    background-color: #f0f0f0;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #e0e0e0;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

export const StyledPageNumber = styled.span`
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    color: ${(props) => (props.active ? "#007bff" : "#000")};
`;
