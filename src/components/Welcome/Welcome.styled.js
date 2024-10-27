import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import materialPalette from "../../styles/palette";
materialPalette;

export const StyledContantWrapper = styled.div`
    margin-top: 32px;
    width: 100%;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        padding: 0px 24px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        gap: 20px;
        justify-content: space-between;
    }
`;
export const StyledWelcomeText = styled.p`
    padding: 16px;
    font-size: 24px;
    text-align: center;
    color: ${materialPalette.primaryVariant};
`;
