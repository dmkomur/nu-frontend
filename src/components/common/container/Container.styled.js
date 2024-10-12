import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0 10px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        padding: 0 12px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        padding: 0 16px;
    }
`;
export default StyledContainer;
