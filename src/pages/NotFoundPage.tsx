import { GreenPage } from "../components/greenPage";
import styled from "@emotion/styled";
import { GrDocumentMissing } from "react-icons/gr";
import { getColor, ColorKey } from "../colors";

const MissingPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MissingIcon = styled(GrDocumentMissing)`
    font-size: 3em;
`;
const MissingText = styled.div`
    padding-top: 0.5em;
    font-size: 1em;
`;

const MissingSubtext = styled.a`
    margin-top: 1em;
    padding: 0.5em 1em;
    border-radius: 10px;
    font-size: 0.75em;
    text-decoration: none;
    color: ${getColor(ColorKey.BACKGROUND)};
    background-color: ${getColor(ColorKey.PRIMARY)};
    &:hover {
        opacity: 0.9;
    }
`;

export const NotFoundPage = () => (
    <GreenPage>
        <MissingPage>
            <MissingIcon />
            <MissingText>Page not found.</MissingText>
            <MissingSubtext href="/">Try here instead.</MissingSubtext>
        </MissingPage>
    </GreenPage>
);
