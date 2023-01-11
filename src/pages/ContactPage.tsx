import styled from "@emotion/styled";
import { IoIosMail, IoLogoLinkedin } from "react-icons/io";

import { ColorKey, getColor } from "../colors";
import { GreenPage } from "../components/greenPage";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { FlexCol, FlexRowC } from "../stylePrimitives";

const Name = styled.div`
    font-weight: 700;
    font-size: 2.5em;
    color: ${getColor(ColorKey.HEADING)};
    @media (max-width: 470px) {
        font-size: 2em;
    }
`;

const DetailIcon = styled.span`
    display: flex;
    margin-right: 0.5em;
    background-color: white;
    padding: 0.25rem;
    border-radius: 10000px;
    color: ${getColor(ColorKey.BACKGROUND)};
`;

const DetailLink = styled.a`
    text-decoration: none;
    color: ${getColor(ColorKey.PRIMARY)};
    display: inline-block;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: ${getColor(ColorKey.PRIMARY)};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export const ContactPage = () => {
    useBackgroundColor(getColor(ColorKey.PRIMARY));
    return (
        <GreenPage>
            <FlexCol gap={"0.5rem"}>
                <Name>Ethan Goh</Name>
                <FlexRowC>
                    <DetailIcon>
                        <IoIosMail />
                    </DetailIcon>
                    <DetailLink
                        target="_blank"
                        href="mailto:ethan@ethangoh.com"
                    >
                        ethan@ethangoh.com
                    </DetailLink>
                </FlexRowC>
                <FlexRowC>
                    <DetailIcon>
                        <IoLogoLinkedin />
                    </DetailIcon>
                    <DetailLink
                        target="_blank"
                        href="https://www.linkedin.com/in/ethangoh/"
                    >
                        ethangoh
                    </DetailLink>
                </FlexRowC>
            </FlexCol>
        </GreenPage>
    );
};
