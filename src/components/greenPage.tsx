import styled from "styled-components";
import { getColor, ColorKey } from "../colors";
import Div100vh from "react-div-100vh";

const RoyalFont = styled.div`
    font-family: "Raleway", sans-serif;
`;

const WrappingBox = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    border: solid 20px ${getColor(ColorKey.PRIMARY)};
    color: ${getColor(ColorKey.PRIMARY)};
    background-color: ${getColor(ColorKey.BACKGROUND)};

    padding: 3em;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const WrappingBoxNoBorder = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    color: ${getColor(ColorKey.PRIMARY)};
    background-color: ${getColor(ColorKey.BACKGROUND)};

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const NoPaddingNoGreenPage: React.FunctionComponent = (props) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw" }}>
            <WrappingBoxNoBorder {...props} />
        </Div100vh>
    </RoyalFont>
);

export const GreenPage: React.FunctionComponent = (props) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw" }}>
            <WrappingBox {...props} />
        </Div100vh>
    </RoyalFont>
);
