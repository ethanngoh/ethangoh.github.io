import { NoPaddingNoGreenPage } from "../components/greenPage";
import IframeResizer from "iframe-resizer-react";

export const FindTime = () => (
    <NoPaddingNoGreenPage>
        <IframeResizer
            src="https://cal.com/ethangoh"
            style={{ width: "100%", height: "100%", border: 0 }}
        />
    </NoPaddingNoGreenPage>
);
