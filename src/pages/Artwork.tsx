import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import Div100vh from "react-div-100vh";
import { COLORS } from "../colors";
import { Container, Row, Col } from "react-grid-system";

const WrappingBox = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    border: solid 2px ${COLORS.OFF_WHITE};
    color: ${COLORS.OFF_WHITE};
    background-color: ${COLORS.BLACK};

    padding: 3em;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const RoyalFont = styled.div`
    font-family: "Raleway", sans-serif;
`;

const imageRange = Array.from({ length: 20 }, (_, i) => i);
const images = imageRange.map((x) => {
    return {
        original: `artwork/${x}.jpg`,
        thumbnail: `artwork/${x}_t.jpg`,
        title: "Title test",
        story: "description test"
    };
});

export const ArtworkPage: React.FunctionComponent = (props) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw" }}>
            <WrappingBox {...props} />
        </Div100vh>
    </RoyalFont>
);

export const Artwork = () => (
    <ArtworkPage>
        <Container>
            <Row>
                <Col md={8}>
                    <ImageGallery items={images} />
                </Col>
                <Col md={4}>Text</Col>
            </Row>
        </Container>
    </ArtworkPage>
);
