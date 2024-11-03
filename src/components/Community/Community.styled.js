import styled from "styled-components";
import materialPalette from "../../styles/palette";
import breakpoints from "../../styles/breakpoints";

export const StyledCommunitySection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.42;
    color: ${materialPalette.primaryVariant};
    padding: 46px 0px;
`;

export const StyledCommunityImage = styled.img`
    max-width: 320px;
    height: 320px;
    border-radius: 160px;
    object-fit: cover;
    display: block;
    margin: 16px auto 16px auto;
    @media (min-width: ${breakpoints.tablet}) {
        margin: 16px 16px 16px 0;
        float: left;
    }
    @media (min-width: ${breakpoints.desktop}) {
        margin: 20px 20px 20px 0;
    }
`;

export const StyledCommunityTextContent = styled.div`
    overflow: hidden;
`;
