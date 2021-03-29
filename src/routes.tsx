import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";
import { SparrowPage } from "./pages/SparrowPage";
import { ResumePage } from "./pages/ResumePage";

export const ReactRoutes = {
    "/clock": { component: <Clock />, title: "Clock" },
    "/black": { component: <BlackPage />, title: "Black Page" },
    "/sparrow": { component: <SparrowPage />, title: "JACK SPARROW" },
    "/resume": {
        component: <ResumePage />,
        title: "Resume | Chris Bentivenga"
    }
};

export const RedirectRoutes = {
    "/pc": "https://pcpartpicker.com/user/chrisbenti/saved/kP29WZ"
};
