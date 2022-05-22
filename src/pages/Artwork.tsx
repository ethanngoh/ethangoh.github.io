import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import Div100vh from "react-div-100vh";
import { COLORS } from "../colors";
import { Container, Row, Col } from "react-grid-system";

import React, { useState } from "react";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import artData from "../data/artwork.json";

const WrappingBox = styled.div`
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    box-sizing: border-box;
    border: solid 1px ${COLORS.OFF_WHITE};
    color: ${COLORS.OFF_WHITE};
    background-color: ${COLORS.BLACK};
    margin: 10px;
`;

const GalleryBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Title = styled.div`
    font-family: "Raleway", sans-serif;
    margin: 1em;
    font-size: 36px;
    font-weight: lighter;
`;

const RoyalFont = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: lighter;
`;

const imageRange = Array.from({ length: 20 }, (_, i) => i);

const images = imageRange.map((x) => {
    const key = `${x}.jpg`;
    const meta = (artData as any)[key];

    return {
        original: `artwork/${x}.jpg`,
        originalHeight: 500,
        thumbnail: `artwork/${x}_t.jpg`,
        ...meta
    };
});

export const ArtworkPage: React.FunctionComponent = (props) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw", overflow: "hidden" }}>
            <WrappingBox {...props} />
        </Div100vh>
    </RoyalFont>
);

function customLeftNav(
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
) {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <FiChevronLeft size={36} />
        </button>
    );
}

function customRightNav(
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
) {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <FiChevronRight size={36} />
        </button>
    );
}

export function Artwork() {
    const [imageIndex, setImageIndex] = useState(0);
    useBackgroundColor("black");
    return (
        <ArtworkPage>
            <Title>Art Collection</Title>
            <GalleryBox>
                <Container>
                    <Row>
                        <Col md={8}>
                            <ImageGallery
                                items={images}
                                onSlide={setImageIndex}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                renderLeftNav={customLeftNav}
                                renderRightNav={customRightNav}
                            />
                        </Col>
                        <Col md={4}>{images[imageIndex].story}</Col>
                    </Row>
                </Container>
            </GalleryBox>
        </ArtworkPage>
    );
}
