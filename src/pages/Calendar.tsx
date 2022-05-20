import { NoPaddingNoGreenPage } from "../components/greenPage";
import IframeResizer from "iframe-resizer-react";

export const Calendar = () => (
    <NoPaddingNoGreenPage>
        <IframeResizer
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=Y2hyaXMuYmVudGl2ZW5nYUBnbWFpbC5jb20&amp;src=OHRpczk1bW5rcGY2N2E4c2d0djdhZmJzaXM0ajhwdXZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2hyaXNiZW50aUBzdHJpcGUuY29t&amp;color=%234285F4&amp;color=%234285F4&amp;color=%234285F4&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK"
            style={{ width: "100%", height: "100%", border: 0 }}
        />
    </NoPaddingNoGreenPage>
);
