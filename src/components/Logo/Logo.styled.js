import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import colors from "../../styles/colors";

export const StyledLogoWrapper = styled.div`
    display: flex;
    gap: 8px;
    padding: 4px;
    justify-content: center;
    cursor: pointer;
    &:hover p {
        color: ${colors.accentRed};
    }
`;

export const StyledLogoText = styled.p`
    font-family: "Pacifico", sans-serif;
    font-size: 32px;
    color: white;
    transition: color 300ms ease;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 36px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 38px;
    }
`;
export const StyledLogoPic = styled.img`
    height: auto;
    width: 70px;
`;
