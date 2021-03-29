import styled from "styled-components";

import Div100vh from "react-div-100vh";
import { ImMail2, ImLinkedin, ImLink } from "react-icons/im";
import { GoGlobe } from "react-icons/go";
import { useBackgroundColor } from "../hooks/useBackgroundColor";

const COLORS = {
    ROYAL_BLUE: "#002366"
};

const HomePage = styled.div`
    font-family: "Raleway", sans-serif;
`;

const WrappingBox = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 3em;

    border: solid 20px ${COLORS.ROYAL_BLUE};
    color: ${COLORS.ROYAL_BLUE};

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Header = styled.div``;

const Name = styled.div`
    font-weight: 700;
    font-size: 2.5em;

    @media (max-width: 470px) {
        font-size: 2em;
    }
`;

const Subheader = styled.div`
    padding-top: 0.1em;
    font-size: 1.2em;
    font-weight: 300;
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

const Spacer = styled.div`
    border-top: solid 1px ${COLORS.ROYAL_BLUE};
    width: 100%;
    height: 0;
    margin: 1.2em 0;

    @media (min-width: 768px) {
        border-top: none;
        border-left: solid 1px ${COLORS.ROYAL_BLUE};
        width: 0;
        height: unset;
        align-self: stretch;
        margin: 0 2em;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

const DetailItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:not(:first-child) {
        margin-top: 0.3em;
    }
`;

const DetailIcon = styled.div`
    margin-right: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const DetailLink = styled.a`
    text-decoration: none;
    color: ${COLORS.ROYAL_BLUE};
`;

export const IndexPage = () => {
    useBackgroundColor("#FFFAFA");
    return (
        <HomePage>
            <Div100vh style={{ width: "100vw" }}>
                <WrappingBox>
                    <Content>
                        <Header>
                            <Name>Chris Bentivenga</Name>
                            <Subheader>Software Engineer</Subheader>
                        </Header>
                        <Spacer />
                        <Details>
                            <DetailItem>
                                <DetailIcon>
                                    <GoGlobe />
                                </DetailIcon>
                                <DetailLink
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Seattle,+WA/data=!4m2!3m1!1s0x5490102c93e83355:0x102565466944d59a?sa=X&ved=2ahUKEwjhu_nA2ffcAhUD3Z8KHdR1BQYQ8gEwGHoECAsQCw"
                                >
                                    Seattle, WA
                                </DetailLink>
                            </DetailItem>
                            <DetailItem>
                                <DetailIcon>
                                    <ImMail2 />
                                </DetailIcon>
                                <DetailLink
                                    target="_blank"
                                    href="mailto:chris@chrisbenti.com"
                                >
                                    chris@chrisbenti.com
                                </DetailLink>
                            </DetailItem>
                            <DetailItem>
                                <DetailIcon>
                                    <ImLink />
                                </DetailIcon>
                                <DetailLink
                                    target="_blank"
                                    href="chrisbenti.com"
                                >
                                    chrisbenti.com
                                </DetailLink>
                            </DetailItem>
                            <DetailItem>
                                <DetailIcon>
                                    <ImLinkedin />
                                </DetailIcon>
                                <DetailLink
                                    target="_blank"
                                    href="https://www.linkedin.com/in/chrisbenti/"
                                >
                                    chrisbenti
                                </DetailLink>
                            </DetailItem>
                        </Details>
                    </Content>
                </WrappingBox>
            </Div100vh>
        </HomePage>
    );
};
