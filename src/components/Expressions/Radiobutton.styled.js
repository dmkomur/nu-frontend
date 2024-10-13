import styled from "styled-components";
import materialPalette from "../../styles/palette";

const StyledRadioButton = styled.label`
    background-color: ${(props) =>
        props.checked ? materialPalette.primary : materialPalette.onPrimary};
    color: ${(props) =>
        props.checked
            ? materialPalette.surfaceLightBlue
            : materialPalette.primary};
    font-size: 24px;
    padding: 8px 16px;
    border-radius: 24px;
    text-align: center;
    cursor: pointer;
    transition: all 300ms ease;

    input {
        display: none;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        transition: all 300ms ease;
    }
`;
export default StyledRadioButton;
