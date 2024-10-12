import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const StyledHeaderWrapper = styled.div`
    width: 100%;
    padding: 4px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (min-width: ${breakpoints.tablet}) {
    }

    @media (min-width: ${breakpoints.desktop}) {
    }
`;
