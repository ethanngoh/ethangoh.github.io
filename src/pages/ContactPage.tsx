import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import Div100vh from "react-div-100vh";
import { FaRegAddressCard, FaRegCalendarPlus } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
import { TbMessageCircle2 } from "react-icons/tb";
import { TfiEmail, TfiLinkedin } from "react-icons/tfi";

import { ColorKey, getColor } from "../colors";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { FlexColC, FlexRowC } from "../stylePrimitives";

const ICON_SIZE = "1.25rem";

const Font = styled.div`
    font-family: "Raleway", sans-serif;
`;

const BORDER = `
    border-radius: 10rem;
`;

const LINK = `
    background-color: ${getColor(ColorKey.CONTACTBUTTONBG)};
    color: white;

    &:link,
    &:visited,
    &:hover,
    &:active {
        color: white;
        text-decoration: none;
    }

    &:hover {
        opacity: .6;
    }
`;

const IconButton = ({
    icon,
    href,
    description
}: {
    icon: ReactNode;
    href: string;
    description: string;
}) => {
    return (
        <FlexColC style={{ width: "4rem" }} gap="0.25rem">
            <a
                href={href}
                className={css`
                    ${BORDER}
                    ${LINK}
                    height: 2.75rem;
                    width: 2.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                `}
            >
                {icon}
            </a>
            <span
                className={css`
                    font-size: 0.75rem;
                `}
            >
                {description}
            </span>
        </FlexColC>
    );
};

const BigActionButton = ({
    icon,
    href,
    description
}: {
    icon: ReactNode;
    href: string;
    description: string;
}) => {
    return (
        <a
            className={css`
                ${BORDER}
                ${LINK}
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 13.5rem;
                max-width: 80vw;
                padding: 0.5rem 0.75rem;
            `}
            href={href}
        >
            {icon}
            <div
                className={css`
                    flex-grow: 1;
                    text-align: center;
                    padding-right: ${ICON_SIZE};
                `}
            >
                {description}
            </div>
        </a>
    );
};

export const ContactPage = () => {
    useBackgroundColor("#fefefe");
    return (
        <Font>
            <Div100vh
                className={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                `}
            >
                <FlexColC gap="0.75rem">
                    <FlexColC gap="0.25rem">
                        <img
                            className={css`
                                height: 7rem;
                                width: 7rem;
                                border-radius: 100%;
                                border: 2px solid rgba(0, 0, 0, 0.05);
                            `}
                            alt="Head shot"
                            src="/img/egoh-square.jpg"
                        />

                        <div
                            className={css`
                                font-weight: bold;
                                font-size: 2em;
                            `}
                        >
                            Ethan Goh
                        </div>
                        <div
                            className={css`
                                font-size: 1rem;
                                width: 100%;
                                text-align: center;
                            `}
                        >
                            <FlexRowC gap="0.25rem">
                                <div>ethan@ethangoh.com</div>
                                <GoPrimitiveDot size={10} />
                                <div>+1 425-445-2299</div>
                            </FlexRowC>
                        </div>
                    </FlexColC>

                    <FlexRowC>
                        <IconButton
                            href="https://wa.me/qr/T5TAQQXQGQVXA1"
                            icon={<ImWhatsapp size={ICON_SIZE} />}
                            description="WhatsApp"
                        ></IconButton>
                        <IconButton
                            href="imessage:ethan@ethangoh.com"
                            icon={<TbMessageCircle2 size={"1.7rem"} />}
                            description="iMessage"
                        />
                        <IconButton
                            href="mailto:ethan@ethangoh.com"
                            icon={<TfiEmail size="1.45rem" />}
                            description="Email"
                        ></IconButton>

                        <IconButton
                            href="https://www.linkedin.com/in/ethangoh/"
                            icon={<TfiLinkedin size="1.45rem" />}
                            description="LinkedIn"
                        />
                    </FlexRowC>
                    <BigActionButton
                        href="/ethangoh.vcf"
                        icon={<FaRegAddressCard size={ICON_SIZE} />}
                        description="+ Add Contact"
                    />

                    <BigActionButton
                        href="https://cal.com/ethangoh"
                        icon={<FaRegCalendarPlus size={ICON_SIZE} />}
                        description="+ Schedule Call"
                    />
                </FlexColC>
            </Div100vh>
        </Font>
    );
};
