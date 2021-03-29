import styled from "styled-components";
import { COLORS } from "../colors";
import Div100vh from "react-div-100vh";

const RoyalFont = styled.div`
    font-family: "Raleway", sans-serif;
`;

const WrappingBox = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 3em;

    border: solid 20px ${COLORS.ROYAL_BLUE};
    color: ${COLORS.ROYAL_BLUE};
    background-color: ${COLORS.OFF_WHITE};

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const RoyalBluePage: React.FunctionComponent = (props) => (
    <RoyalFont>
        <Div100vh style={{ width: "100vw" }}>
            <WrappingBox {...props} />
        </Div100vh>
    </RoyalFont>
);
