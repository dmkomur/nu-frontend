import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import materialPalette from "../../styles/palette";
materialPalette;
export const StyledContantWrapper = styled.div`
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
    font-size: 24px;
    text-align: center;
    max-width: 400px;
    color: ${materialPalette.primaryVariant};
    @media (min-width: ${breakpoints.tablet}) {
        text-align: left;
        justify-content: space-between;
    }

    @media (min-width: ${breakpoints.desktop}) {
        max-width: 480px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        max-width: 620px;
    }
`;
export const StyledListWrapper = styled.div`
    background-color: ${materialPalette.surface};
    max-width: 400px;
    border-radius: 24px;
    padding: 16px;
    color: ${materialPalette.primaryVariant};
    @media (min-width: ${breakpoints.tablet}) {
        max-width: 304px;
    }
    @media (min-width: ${breakpoints.desktop}) {
        max-width: 504px;
    }
`;

export const StyledListHeader = styled.p`
    font-size: 24px;
    margin-bottom: 12px;
    @media (min-width: ${breakpoints.tablet}) {
        margin-bottom: 16px;
    }
`;
export const StyledListItem = styled.li`
    font-size: 24px;
    margin-bottom: 8px;
    color: ${materialPalette.secondary};

    span {
        color: ${materialPalette.primary};
    }

    @media (min-width: ${breakpoints.tablet}) {
        margin-bottom: 12px;
    }
`;
