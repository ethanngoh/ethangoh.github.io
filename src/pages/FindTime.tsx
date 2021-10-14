import { NoPaddingNoBluePage } from "../components/royalBluePage";
import IframeResizer from "iframe-resizer-react";

export const FindTime = () => (
    <NoPaddingNoBluePage>
        <IframeResizer
            src="https://meeting.calendr.it//ethangoh#color=#002366"
            style={{ width: "100%", height: "100%", border: 0 }}
        />
    </NoPaddingNoBluePage>
);
