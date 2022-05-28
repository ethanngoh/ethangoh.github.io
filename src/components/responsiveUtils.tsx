import styled from "styled-components";

// Using the bootstrap medium screen size to determine what a phone is
export const HiddenOnMobile = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const OnlyOnMobile = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;
